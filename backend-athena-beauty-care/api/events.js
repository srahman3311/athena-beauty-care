const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const jwt = require("jsonwebtoken");

const Event = require("../models/Event");
const Stylist = require("../models/Stylist");


// libs
const calculateEventTimes = require("../libs/calculateEventTimes");
const findBusyTimes = require("../libs/findBusyTimes");
const getStylistAllWorkingTimes = require("../libs/getStylistAllWorkingTimes");






router.get("/", (request, response) => {
    

    Event.find({}, (err, events) => {

        if(err) return response.status(500).send(err);

        return response.status(200).json({events});

    });

});


router.get("/:_id", (request, response) => {

    const _id = request.params._id;


    Event.findOne({ _id }, (err, Event) => {

        if(err) return response.status(500).send(err);

        return response.status(200).json({ Event });

    });

});



router.post("/", (request, response) => {
    

    const { searchText, skip, limit } = request.body;

    // As LIKE in MySQL
    // For multiple fields
    let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
    const query = { $or: [{title: regex }, {stylist: regex}, {clientEmail: regex}] }

    // To know the total length of data found with the searchText
    Event.find(query, (error, totalEvents) => {

        if(error) return response.status(500).json({msg: "Something went wrong"});

        // This database query is to get the data after skipping and limiting
        Event.find(query).limit(limit).skip(skip).exec((newError, events) => {

            if(newError) return response.status(500).json({msg: "Something went wrong"});
    
            return response.status(200).json({events, dataLength: totalEvents.length});
        });

    });
    
});









router.post("/add-event", async (request, response) => {

    // Destructuring request.body 
    let { 
        eventDate, 
        startTime, 
        treatmentCategory,
        treatmentName,
        stylist,
        eventDuration,
        eventLocation,
        clientName,
        clientEmail,
        clientPhone,
        eventDescription,
        eventPrice 
    } = request.body;

    // console.log(stylist);


    // Steps

    // 1. Find the stylist from the Stylist collection and check if her workSchedule includes eventDate's
    //    day (example - Monday) at the requested location. Else return with an unavailable error message

    // 2. If step 1 is pass, now check to see if stylist's workingTimes include both requested startTime and endTime
    //    if it doesn't include then return with an unavailable error message
    
    // 3. If step 2 is pass, now check to see if stylist is busy from startTime till endTime

    // 4. If step 3 is also pass, go ahead and add the event to stylist's calendar



    // Step 1 
    const stylistQuery = { 
        firstName: stylist.substring(0, stylist.indexOf(" ")),
        lastName: stylist.substring(stylist.indexOf(" ") + 1, stylist.length)
    }

    Stylist.findOne(stylistQuery, (error, foundStylist) => {

        if(error) return response.status(500).json({msg: "Something went wrong"});

        // Find the weekday (example - Monday) from the requested eventDate to check agains the stylist's workSchedule
        const dayName = new Date(eventDate).toLocaleDateString("en-US", { weekday: "long" });
      
        // Initialize the isAvailable variable with the initial value false. 
        let isAvailable = false;

        // For checking if both startTime and endTime is included in the stylist's workingTimes
        let matchedWorkSchedule;

        foundStylist.workSchedule.forEach(schedule => {

            if(schedule.day === dayName && schedule.location === eventLocation) {

                isAvailable = true;
                matchedWorkSchedule = schedule;

            }

        });

        // If not available then return with a 400 error message
        if(!isAvailable) {

            return response.status(400).json({
                msg: `${stylist} is not available on ${dayName} at ${eventLocation}`
            })

        }
        // Step 1 ends here



        // Step 2

        // Calculating start and end time as per the format of google calendar's event times
        const { newStartTime, newEndTime } = calculateEventTimes(eventDate, startTime, eventDuration);

        // Separate the endTime in hour:minute to see if it is included in stylist's working times
        const endTime = newEndTime.substring(newEndTime.indexOf("T") + 1, newEndTime.length);

        // Get the stylist's all working times based on 15 minutes interval
        const stylistWorkingTimes = getStylistAllWorkingTimes(matchedWorkSchedule.startTime, matchedWorkSchedule.endTime);

        // Now check to see of both startTime and endTime are included in the stylist's working times at the requested
        // location on requested weekday (example - Monday)
        const doesIncludeStartEndTimes = stylistWorkingTimes.includes(startTime) && stylistWorkingTimes.includes(endTime);

        if(!doesIncludeStartEndTimes) {

            return response.status(400).json({
                msg: `${stylist} working times don't have ${startTime} or ${endTime}`
            });

        }
        // Step 2 ends here



        // Step 3

        // Loop throught the events of the stylist and check to see if she is busy at requested startTime
        Event.find({ stylist }, async (error, events) => {

            if(error) return response.status(500).json({msg: "Something went wrong"});
    
            let isBusy = false;
    
            for(let i = 0; i < events.length; i++) {
    
                const busyTimes = findBusyTimes(events[i].eventDuration, events[i].startTime);
    
                console.log(busyTimes);
    
                if(busyTimes.includes(newStartTime)) {
    
                    isBusy = true;
                    break;
    
                } 
                
            }
    
            if(isBusy) return response.status(403).json({msg: `${stylist} is busy at ${startTime} on this date`});
            // Step 3 ends here



            // console.log(foundStylist);
            // Step 4
            // Add the event
            //const refreshToken = foundStylist.refreshToken;

            try {
            
                // Get a new token each time before sending get request for calendar resources (events or whatever)
                const ep1 = `https://oauth2.googleapis.com/token?client_id=${process.env.CLIENT_ID}&client_secret=`
                const ep2 = `${process.env.CLIENT_SECRET}&refresh_token=${refreshToken}&grant_type=refresh_token`; 
                const tokenEndpoint = ep1 + ep2;
        
                // Calling the token endpoint
                const accessTokenResponse = await axios.post(tokenEndpoint);
        
                // accessTokenResponse.data.access_token contains the new access_token, use it to send request to get the events
                const token = accessTokenResponse.data.access_token;
                console.log(accessTokenResponse);
                console.log(token);
        
                try {

                    const API_KEY = process.env.API_KEY;
        
                    const eventEndpoint = `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}`;
                   
                    const event = {
                        summary: `${treatmentName} with ${stylist} for ${eventDuration} minutes`,
                        start: {dateTime: `${newStartTime}:00+06:00`, timeZone: "Asia/Dhaka"},
                        end: {dateTime: `${newEndTime}:00+06:00`, timeZone: "Asia/Dhaka"},
                        description: `${treatmentName} with client ${clientEmail}`,
                        location: eventLocation
                    };
        
                    const config = { headers: {Authorization: "Bearer " + token} }
                    const eventResponse = await axios.post(eventEndpoint, event, config);

                    //console.log(eventResponse);
                    // console.log(eventResponse.data);
        
                    
                    if(eventResponse.status !== 200) {
                        return response.status(403).json({
                            msg: `Something went wrong, please try again later`
                        })
                    }


                    let description = eventDescription;
                    eventPrice = Number(eventPrice);
    
                    const newEvent = new Event({
                        startTime: newStartTime,
                        endTime: newEndTime,
                        title: `${treatmentName} with ${stylist}`,
                        treatmentCategory,
                        treatmentName,
                        stylist,
                        eventDuration,
                        eventLocation,
                        clientName,
                        clientEmail,
                        clientPhone,
                        description,
                        eventPrice,
                        googleCalendarEventId: eventResponse.data.id,
                        status: "Active"
                    });
            
                    newEvent.save(error => {
            
                        if(error) return response.status(500).json({msg: "Something went wrong"});
                        
                        return response.status(200).json({msg: "event successfully saved"});
                    });
                    
                } 
                catch(error) {
                    console.log(error);
                    return response.status(500).json({msg: "Something went wrong"});
                }
            } 
            catch (error) {
                console.log("Hi");
                console.log(error);
                return response.status(500).json({msg: "Something went wrong"});
            }

        });

    });


});













router.post("/update", async (request, response) => {

    const { email, authCode } = request.body;
    console.log(authCode);

    // Calling google api for access & refresh token in exchange of authorization code received from user oauth consent
    const endpoint = "https://oauth2.googleapis.com/token?";
    const p1 = `code=${authCode}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&`;
    const p2 = `redirect_uri=${process.env.REDIRECT_URI}&grant_type=${process.env.GRANT_TYPE}`;
    const params = p1 + p2;

    const uri = endpoint + params;

    const authResponse = await axios.post(uri, {  headers: { "Content-Type": "application/x-www-form-urlencoded" } });

    // Refresh token received from google 
    const refreshToken = await authResponse.data.refresh_token;

    Event.findOne({ email }, (err, Event) => {

        if(err) return response.status(500).send(err);

        // Updating refreshToken previously set as empty string with refresh_token received from google oauth token response
        Event.calendarAccessCode = refreshToken;

        Event.save(err => {

            if(err) return response.status(500).send(err);

            return response.status(200).json({refreshToken});
        });
    });  
});


router.post("/axios-test", async (request, response) => {

    const responseData = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(responseData.data);

    response.json({msg: "axios is working"});
});



router.post("/login", (request, response) => {
    
    const { email, password } = request.body;

    Event.findOne({ email }, (dbError, Event) => {
        
        // if error is of database server send the error message
        if(dbError) return response.status(500).send(dbError);

        // if Event doesn't exist return with an error message
        if(!Event) return response.status(404).json({msg: "Event Doesn't Exist"});

        // check to see if password is correct
        bcrypt.compare(password, Event.password, (bycryptError, isMatch) => {
            // if error is of bcrypt send the error message
            if(bycryptError) return response.status(500).send(bycryptError);
            // If passwords match
            if(isMatch) {
                // jwt expiresIn option is measured in seconds
                jwt.sign(
                    {id: Event._id},
                    process.env.JWT_SECRET_KEY,
                    {expiresIn: 3600},
                    (jwtError, token) => {
                        // if error is of jwt send the error message
                        if(jwtError) return response.status(500).send(jwtError);

                        // with maxAge httpOnly must be set to false, otherwise cookie won't be saved in browser
                        response.cookie("jwtToken", token, {maxAge: 3600000, httpOnly: false});
                        
                        response.status(200).json(Event);
                    }
                );
            } 
            // If passwords don't match
            else {
                response.status(400).json({msg: "Incorrect password"});
            }
        });
    });

});







router.post("/send_mail", (request, response) => {

    // to be able to send email using gmail must follow the following link and set Allow less secure apps to ON
    // https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Pt9GxHSeDqcf9iDhMpTpr0V1UFw9UMtz9uG2okpWpNRvCD1Pd5C9W-NC4zq_EWkCcClGBFOkJz-hMSudF8JtcE0RPR6w

    // for well known smptp providers such as gmail, yahoo, hotmail and won't work for less or not known ones
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "samsur.rahman3311@gmail.com",
            pass: "ubaidrahman@57"
        }
    });

    /*
    // for less or not known smtp providers
    const transport = nodemailer.createTransport({
        host: "smtp.xxxx.com",
        port: 465,
        secure: true, // port 465 requires secure option set to true. for other port numbers set it to false
        auth: {
            user: "username",
            pass: "password"
        }
    });
    */

    
    const mailOptions = {
        from: "samsur.rahman3311@gmail.com",
        to: "rafez.developer@gmail.com",
        subject: "Greeting",
        text: "Welcome to nodemailer",
        html: "Hi Baby"
    };

    transport.sendMail(mailOptions, (err) => {
        
        if(err) return console.log(err);
        
    });

    return response.json({msg: "email successfully sent"});

});




router.post("/add-events", async (request, response) => {

    let { email, summary, start, end } = request.body;
    console.log(start, end);

    // start = new Date(start).toLocaleString("en-US", {timeZone: "Asia/Dhaka"});
    // end = new Date(end).toLocaleString("en-US", {timeZone: "Asia/Dhaka"});

    Event.findOne({ email }, async (err, Event) => {

        if(err) return response.status(500).json({msg: "Something went wrong"});

        const refreshToken = Event.calendarAccessCode;

        try {
        
            // Get a new token each time before sending get request for calendar resources (events or whatever)
            const ep1 = `https://oauth2.googleapis.com/token?client_id=${process.env.CLIENT_ID}&client_secret=`
            const ep2 = `${process.env.CLIENT_SECRET}&refresh_token=${refreshToken}&grant_type=refresh_token`; 
            const tokenEndpoint = ep1 + ep2;
    
            // Calling the token endpoint
            const accessTokenResponse = await axios.post(tokenEndpoint);
    
            // accessTokenResponse.data.access_token contains the new access_token, use it to send request to get the events
            const token = accessTokenResponse.data.access_token;
    
            try {

                //"Accept": "application/json", "Content-Type": "application/json"

                const API_KEY = process.env.API_KEY;
    
                const eventEndpoint = `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}`;
                const config = { 
                    headers: { 
                        Authorization: "Bearer " + token, "Accept": "application/json", "Content-Type": "application/json"  
                    }
                };
                // const event = {
                //     "summary": summary,
                //     "start": {"dateTime": start, "timeZone": "Asia/Dhaka"},
                //     "end": {"dateTime": end, "timeZone": "Asia/Dhaka"}
                // };
                const event = {
                    summary: "Event 2",
                    start: {dateTime: "2021-10-25T10:00:00+06:00", timeZone: "Asia/Dhaka"},
                    end: {dateTime: "2021-10-25T11:00:00+06:00", timeZone: "Asia/Dhaka"}
                };
    
                // const authResponse = await axios.post(uri, {  headers: { "Content-Type": "application/x-www-form-urlencoded" } });
                // 'primary' inside the following endpoint is calendar id. 
                // const eventEndpoint = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
                const eventResponse = await axios.post(eventEndpoint, event, { headers: {Authorization: "Bearer " + token}});

                return console.log(eventResponse.data);
    
                return response.status(200).json({events: eventResponse.data.items});
                
            } 
            catch(error) {
                console.log(error);
                return response.status(500).json({msg: "Something went wrong"});
            }
        } 
        catch (error) {
            console.log(error);
            return response.status(500).json({msg: "Something went wrong"});
        }

    });



    // console.log(new Date(start).toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));
    // console.log(new Date(end).toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));

    // //console.log(request.body);
    // return response.status(200).json({msg: "req received"});

    // const { refreshToken } = request.body;
    // //console.log(refreshToken);



});



router.post("/fetch-events-by-mail", async (request, response) => {

    const { email } = request.body;
    

    Event.findOne({email}, async (error, Event) => {

        console.log(email);
        if(error) return response.status(500).json({msg: "Something went wrong"});


        try {
        
            // Get a new token each time before sending get request for calendar resources (events or whatever)
            const ep1 = `https://oauth2.googleapis.com/token?client_id=${process.env.CLIENT_ID}&client_secret=`
            const ep2 = `${process.env.CLIENT_SECRET}&refresh_token=${Event.calendarAccessCode}&grant_type=refresh_token`; 
            const tokenEndpoint = ep1 + ep2;
    
            // Calling the token endpoint
            const accessTokenResponse = await axios.post(tokenEndpoint);
    
            // accessTokenResponse.data.access_token contains the new access_token, use it to send request to get the events
            const token = accessTokenResponse.data.access_token;
    
            try {
    
                // 'primary' inside the following endpoint is calendar id. 
                const eventEndpoint = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
                const eventResponse = await axios.get( eventEndpoint, { headers: { Authorization: "Bearer " + token }});
    
                return response.status(200).json({events: eventResponse.data.items})
                
            } 
            catch(error) {
                return response.status(500).json({msg: "Something went wrong"});
            }
        } 
        catch (error) {
            return response.status(500).json({msg: "Something went wrong"});
        }



    })

   

});














module.exports = router;




/*

// For Report Component
router.get("/", auth, (request, response) => {

    connection.query("select * from users", (err, users) => {
        // Error Checking
        if(err) return response.status(500).send(err);

        return response.status(200).json(users);
    });
});


// For Report Component Job Filtering
router.post("/search", auth, (request, response) => {

    const { searchText } = request.body;

    let sql = "select * from users where username LIKE '%" + [searchText] + "%'";

    connection.query(sql, (err, users) => {
        // Error Checking
        if(err) return response.status(500).send(err);

        return response.status(200).json(users);
    });


});



router.post("/", auth, (req, res) => {
    // Destructuring req.body object
    const { limit, offset, searchText } = req.body;
    // results are for just job list length
    let sql = "select * from users where first_name LIKE '%" + [searchText] + "%' OR last_name LIKE '%" + [searchText] 
    + "%' OR username LIKE '%" + [searchText] + "%' OR designation LIKE '%" + [searchText] + "%' OR status LIKE '%" + 
    [searchText] + "%'";

    connection.query(sql, (err, results) => {
        // Error Checking
        if(err) return res.status(500).send(err);
        // if there are no items then return the empty array
        if(!results.length) return res.status(200).json({results, users: results});

        sql2 = sql + " limit " + [limit] + " offset " + [offset];
        connection.query(sql2, (err, users) => {
            // Error Checking
            if(err) return res.status(500).send(err);
            // if there are no items after offsetting then substract the limit value from offset and send found items. 
            if(!users.length) {

                const sql3 = sql + " limit " + [limit] + " offset " + [offset - limit];

                connection.query(sql3, (err, userResults) => {
                    // Error Checking
                    if(err) res.status(500).send(err);

                    res.status(200).json({users: userResults, results});
                });
            } 
                // else just send the items after offsetting
            else {
                res.status(200).json({users, results});
            }
        });
    });
            
    
});

/*
router.post("/", (req, res) => {
    // for user details editing at the frontend
    if(typeof req.body.user_id !== "undefined") {
        const searchId = Number(req.body.user_id);

        connection.query("select * from users where user_id = ?", [searchId], (err, user) => {
            if(err) res.status(500).send(err);

            return res.json(user);
        });
    } else {

        // For sending payorder data at the Payorder Component startup
        connection.query("select * from users", (err, results) => {

            if(err) res.status(500).send(err);

            const { limit, offset } = req.body;

            sql = "select * from users limit " + [limit] + " offset " + [offset];
            connection.query(sql, (err, users) => {

                if(err) res.status(500).send(err);

                res.status(200).json({results, users});
            });
        });
    }  
});

*/

/*
// To find a specific user in order to populate the Profile Component
router.post("/user", (req, res) => {
    
    connection.query("select * from users where username = ?", [req.body.username], (err, user) => {

        if(err) throw err;

        if(!user.length) {
            res.status(404).json({msg: "User doesn't exist"});
        } else {
            res.status(200).json(user[0]);
        }
    });
});




// Login Route
router.post("/login", (req, res) => {

    const {username, password} = req.body;

    connection.query("select * from users where username = ?", [username], (err, user) => {
        if(err) throw err;

        if(!user.length) {
            res.status(404).json({msg: "User doesn't exist"});
        } else {
            bcrypt.compare(password, user[0].password, (err, isMatch) => {

                if(err) throw err;

                // If passwords match
                if(isMatch) {

                    // jwt expiresIn option is measured in seconds
                    jwt.sign(
                        {id: user[0].user_id},
                        process.env.SECRET_KEY,
                        {expiresIn: 3600},
                        (err, token) => {

                            if(err) throw err;

                            // with maxAge httpOnly must be set to false, otherwise cookie won't be saved in browser
                            res.cookie("jwtToken", token, {maxAge: 3600000, httpOnly: false});
                            // res.json({
                            //     userDetails: {
                            //         username: user[0].username,
                            //         status: user[0].status,
                            //         role: user[0].role
                            //     }
                            // });
                            res.json(user);
                        }
                    );
                } 
                // If passwords don't match
                else {
                    res.status(400).json({msg: "Incorrect password"});
                }

            });
        }
    });
    
});




router.post("/add-user", (request, response) => {

     // Destructuring req.body object
     let { first_name, last_name, username, designation, role, status, password, userID, filename } = request.body;
     // Getting the file from req.files
     let imageFile = request.files !== null ? request.files.file : null;
     // Creating the imgUrl 
     let imgUrl = imageFile !== null ? "http://localhost:3030/images/" + imageFile.name : null;
     // Need to save the filename as well, to be able to display the filename when user clicks on the update on frontend
     let imageFileName = imageFile !== null ? imageFile.name : null;
   
 
     // Initializing user_id
     let user_id = 1001;

    // First check to see whether add or update request has been made.
    userID = Number(userID);

    // If userID is not 0 then update request has been made
    if(userID) {

        // First, find the user with the userID sent from frontend
        connection.query("select * from users where user_id=?", [userID], (err, user) => {

            // Error Checking
            if(err) return response.status(500).send(err);

            // if user's filename is not null then user previously added an image for profile picture
            if(user[0].filename !== null) {

                 // if user's filename and filename sent from frontend are same then user didn't want to update the profile image
                if(user[0].filename === filename) {

                    if(password) {
                        // need to hash the password first and then replace the existing password with this new hashed one
                        bcrypt.genSalt(10, (err, salt) => {
                            // Error Checking
                            if(err) return response.status(500).send(err);

                            bcrypt.hash(password, salt, (err, hash) => {
                                // Error Checking
                                if(err) return response.status(500).send(err);

                                password = hash;

                                const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, password=? where user_id=?";
                                const data = [first_name, last_name, username, designation, role, status, password, userID];

                                connection.query(sql, data, err => {

                                    // Error Checking
                                    if(err) return response.status(500).send(err);

                                    return response.json({msg: "User Details have been successfully updated"});
                                });

                            });
                        });
                
                    } else {

                        const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=? where user_id=?";
                        const data = [first_name, last_name, username, designation, role, status, userID];

                        connection.query(sql, data, err => {
                            // Error Checking
                            if(err) return response.status(500).send(err);

                            return response.json({msg: "User Details have been successfully updated"});
                            });
                    }
                }
                // else, user wants to update the profile picture
                else {
                    // if request has a valid password
                    if(password) {

                        bcrypt.genSalt(10, (err, salt) => {
                            // Error Checking
                            if(err) return response.status(500).send(err);

                            bcrypt.hash(password, salt, (err, hash) => {
                                // Error Checking
                                if(err) return response.status(500).send(err);

                                password = hash;

                                const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, password=?, imgUrl=?, filename=? where user_id=?";
                                const data = [first_name, last_name, username, designation, role, status, password, imgUrl, imageFileName, userID];
                
                                connection.query(sql, data, err => {
                                    
                                    // Error Checking
                                    if(err) return response.status(500).send(err);
                            

                                    // First, need to remove the previous file from filesytem
                                    fs.unlink(`./public/images/${user[0].filename}`, err => {
                                        // Error Checking
                                        if(err) return response.status(500).send(err);

                                        imageFile.mv(`./public/images/${imageFileName}`, function(err) {
                                            // Error Checking
                                            if(err) return response.status(500).send(err);

                                            return response.json({msg: "User Details have been successfully updated"});
                                        });
                                    });            
                                });
                            });
                        });
                        
                    } 
                    // if request contains an empty string password
                    else {

                        const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, imgUrl=?, filename=? where user_id=?";
                        const data = [first_name, last_name, username, designation, role, status, imgUrl, imageFileName, userID];
        
                        connection.query(sql, data, err => {
                            
                            // Error Checking
                            if(err) return response.status(500).send(err);
                    

                            // First, need to remove the previous file from filesytem
                            fs.unlink(`./public/images/${user[0].filename}`, err => {
                                // Error Checking
                                if(err) return response.status(500).send(err);

                                imageFile.mv(`./public/images/${imageFileName}`, function(err) {
                                    // Error Checking
                                    if(err) return response.status(500).send(err);

                                    return response.json({msg: "User Details have been successfully updated"});
                                });
                            });            
                        });
                    }

                    
                }
            } 
            // User didn't have a profile picture
            else {

                // First check to see if user has uploaded an image this time or not
                if(imageFile !== null) {

                    // check to see if password change request has been made or not
                    if(password) {

                        bcrypt.genSalt(10, (err, salt) => {
                            // Error Checking
                            if(err) response.status(500).send(err);

                            bcrypt.hash(password, salt, (err, hash) => {
                                // Error Checking
                                if(err) response.status(500).send(err);

                                password = hash;

                                const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, password=?, imgUrl=?, filename=? where user_id=?";
                                const data = [first_name, last_name, username, designation, role, status, password, imgUrl, imageFileName, userID];
                
                                connection.query(sql, data, err => {
                                    
                                    // Error Checking
                                    if(err) return response.status(500).send(err);
                            
                                    imageFile.mv(`./public/images/${imageFileName}`, function(err) {
                                        // Error Checking
                                        if(err) return response.status(500).send(err);

                                        return response.json({msg: "User Details have been successfully updated"});
                                    });
                                             
                                });


                            });
                        });

                    } else {

                        const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, imgUrl=?, filename=? where user_id=?";
                        const data = [first_name, last_name, username, designation, role, status, imgUrl, imageFileName, userID];
                
                        connection.query(sql, data, err => {
                                    
                            // Error Checking
                            if(err) return response.status(500).send(err);
                            
                            imageFile.mv(`./public/images/${imageFileName}`, function(err) {
                                // Error Checking
                                if(err) return response.status(500).send(err);

                                return response.json({msg: "User Details have been successfully updated"});
                            });
                                             
                        });

                    }
                }
                // Eles, user didn't want to set a profile image this time too
                else {

                    if(password) {

                        bcrypt.genSalt(10, (err, salt) => {
                            // Error Checking
                            if(err) response.status(500).send(err);

                            bcrypt.hash(password, salt, (err, hash) => {
                                // Error Checking
                                if(err) response.status(500).send(err);

                                password = hash;

                                const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=?, password=? where user_id=?";
                                const data = [first_name, last_name, username, designation, role, status, password, userID];
                
                                connection.query(sql, data, err => {
                                    
                                    // Error Checking
                                    if(err) return response.status(500).send(err);

                                    return response.json({msg: "User Details have been successfully updated"});
                                             
                                });


                            });
                        });

                    } else {

                        const sql = "update users set first_name=?, last_name=?, username=?, designation=?, role=?, status=? where user_id=?";
                        const data = [first_name, last_name, username, designation, role, status, userID];
                
                        connection.query(sql, data, err => {
                                    
                            // Error Checking
                            if(err) return response.status(500).send(err);

                            return response.json({msg: "User Details have been successfully updated"});
                                             
                            });
                    }
                }
            }

        });
    } 
    // Else, new add request has been made
    else {
        // First, check to see if user exists or not
        connection.query("select * from users where username=?", [username], (err, user) => {
            // Error Checking
            if(err) return rresponse.status(500).send(err);

            if(user.length) return response.status(400).json({msg: "User alrady exists"});

            // If user doesn't fill up following fields and wants to add a new user anyway
            if(designation === "") designation = "Event";
            if(role === "") role = "Event";
            if(status === "") status = "Active";

            // hash the password
            bcrypt.genSalt(10, (err, salt) => {
                 // Error Checking
                if(err) return response.status(500).send(err);

                bcrypt.hash(password, salt, (err, hash) => {
                     // Error Checking
                    if(err) return response.status(500).send(err);

                    password = hash;
                    // Below query is just for unique user_id generation, 
                    connection.query("select * from users", (err, users) => {
                        // Error Checking
                        if(err) return response.status.send(err);
                        // if there are no user currently present then user_id will be 1001 but if there are
                        // then dynamically create the new and unique user id
                        if(users.length) user_id = users[users.length - 1].user_id + 1;
    
                        let sql = "insert into users values ?";
                        let values = [[user_id, first_name, last_name, username, designation, password, role, status, imgUrl, imageFileName]];
                        connection.query(sql, [values], err => {
                            // Error Checking
                            if(err) return response.status(500).send(err);
    
                            // if request contains an image/file, upload it
                            if(imageFile !== null) {
                                // Upload method given by express file upload
                                imageFile.mv(`./public/images/${imageFile.name}`, function(err) {
                                    // Error Checking
                                    if (err) return response.status(500).send(err);
                                    // Return with the success message
                                    return response.status(200).json({msg: "One user has been successfully added"});
                                });
                            } 
                            // if request doesn't contain an image/file then just send the success message
                            else {
                                // Return with success message
                                return response.status(200).json({msg: "One user has been successfully added"});
                            }
                        });
    
                    });
                });
            });
        });
    }


});



 





// Deleting User
router.post("/delete", auth, (req, res) => {
    // Destructuring req.body object
    let { userID, limit, offset, searchText} = req.body;


    connection.query("select * from users where user_id =?", [Number(userID)], (err, user) => {
        // Error Checking
        if(err) return res.status(500).send(err);


        if(user[0].filename !== null) {
            // Remove the file from the dirctory first
            fs.unlink(`./public/images/${user[0].filename}`, err => {
                // Error Checking
                if(err) return res.status(500).send(err);

                connection.query("delete from users where user_id = '" + [Number(userID)] + "'", (err) => {
                    if(err) return res.status(500).send(err);
            
                    let sql = "select * from users where first_name LIKE '%" + [searchText] + "%' OR last_name LIKE '%" + [searchText] 
                    + "%' OR username LIKE '%" + [searchText] + "%' OR designation LIKE '%" + [searchText] + "%' OR status LIKE '%" + 
                    [searchText] + "%'";
        
                    connection.query(sql, (err, results) => {
                        if(err) return res.status(500).send(err);
            
                        if(!results.length) return res.status(200).json({results, users: results});
            
                        const sql2 = sql + " limit " + [limit] + " offset " + [offset];
                        connection.query(sql2, (err, users) => {
                            if(err) return res.status(500).send(err);
            
                            if(!users.length) {
                                const sql3 = sql + " limit " + [limit] + " offset " + [offset - limit];
                                connection.query(sql3, (err, userResults) => {
                                    if(err) res.status(500).send(err);
            
                                    res.status(200).json({users: userResults, results});
                                });
                            } else {
                                res.status(200).json({users, results});
                            }
                        })
                    })
                });
                
            });
        
        } else {

            connection.query("delete from users where user_id = '" + [Number(userID)] + "'", (err) => {
                if(err) return res.status(500).send(err);
        
                let sql = "select * from users where first_name LIKE '%" + [searchText] + "%' OR last_name LIKE '%" + [searchText] 
                + "%' OR username LIKE '%" + [searchText] + "%' OR designation LIKE '%" + [searchText] + "%' OR status LIKE '%" + 
                [searchText] + "%'";
    
                connection.query(sql, (err, results) => {
                    if(err) return res.status(500).send(err);
        
                    if(!results.length) return res.status(200).json({results, users: results});
        
                    const sql2 = sql + " limit " + [limit] + " offset " + [offset];
                    connection.query(sql2, (err, users) => {
                        if(err) return res.status(500).send(err);
        
                        if(!users.length) {
                            const sql3 = sql + " limit " + [limit] + " offset " + [offset - limit];
                            connection.query(sql3, (err, userResults) => {
                                if(err) res.status(500).send(err);
        
                                res.status(200).json({users: userResults, results});
                            });
                        } else {
                            res.status(200).json({users, results});
                        }
                    })
                })
            });
        }

        

        
    });
  
   
   
});


*/






























































/*
router.post("/add-user", (req, res) => {

    let {first_name, last_name, username, designation, role, password} = req.body;
    let imageFile = req.files !== null ? req.files.file : null;
    let imgUrl = imageFile !== null ? "http://localhost:3030/images/" + imageFile.name : null;
    let user_id = 1001;

    if(designation === "") designation = "Event";
    if(role === "") role = "Event";
    
    bcrypt.genSalt(10, (err, salt) => {
        if(err) res.status(500).send(err);

        bcrypt.hash(password, salt, (err, hash) => {
            if(err) res.status(500).send(err);

            password = hash;

            connection.query("select * from users", (err, users) => {
                if(err) res.status.send(err);
                user_id += users.length;

                let sql = "insert into users values ?";
                let values = [[user_id, first_name, last_name, username, designation, password, role, "active", imgUrl]];

                connection.query(sql, [values], err => {
                    if(err) res.status(500).send(err);

                    // if request contains an image/file, upload it
                    if(imageFile !== null) {

                        imageFile.mv(`./public/images/${imageFile.name}`, function(err) {

                            if (err) {res.status(500).send(err)};

                            connection.query("select * from users where username = ?", [username], (err, user) => {

                                if(err) res.status(500).send(err);

                                res.status(200).json(user[0]);
                            });
                            
                        });
                    } 
                    // if request doesn't contain an image/file then just send the newly added user data
                    else {
                        connection.query("select * from users where username = ?", [username], (err, user) => {
                            if(err) res.status(500).send(err);
                            res.status(200).json(user[0]);
                        });
                    }
                });

            });
            
        });
    });
    
});



router.get("/logout", (req, res) => {
    
    res.clearCookie("jwtToken");

    res.status(200).json({msg: "cookie successfully removed"});
});

*/






