const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const Stylist = require("../models/Stylist");






router.get("/", (request, response) => {
    

    Stylist.find({}, (err, stylists) => {

        if(err) return response.status(500).send(err);

        return response.status(200).json(stylists);

    });

});


router.post("/", async (request, response) => {

    const { searchText, skip, limit } = request.body;

    // As LIKE in MySQL
    // For multiple fields
    let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
    const query = { $or: [{ firstName: regex }, { lastName: regex }, { username: regex }, { email: regex }] }

    // To know the total length of data found with the searchText
    Stylist.find(query, (error, totalStylists) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        // This database query is to get the data after skipping and limiting
        Stylist.find(query).limit(limit).skip(skip).exec((newError, stylists) => {

            if(newError) return response.status(500).json({msg: "Something went wrong, probably server error"});
    
            return response.status(200).json({items: stylists, totalItemCount: totalStylists.length});
        });

    });

});



router.get("/:_id", (request, response) => {

    console.log("ggg");

    const _id = request.params._id;


    Stylist.findOne({ _id }, (err, stylist) => {

        if(err) return response.status(500).send(err);

        return response.status(200).json(stylist);

    });

});



router.post("/fetch-google-events", (request, response) => {

    console.log(request.body);

    const { username } = request.body;

    Stylist.findOne({ username }, async (error, stylist) => {

        if(error) return response.status(500).send("Something went wrong");

        const refreshToken = stylist.refreshToken;

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

                // 'primary' inside the following endpoint is calendar id. 
                const eventEndpoint = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
                const eventResponse = await axios.get( eventEndpoint, { headers: { Authorization: "Bearer " + token }});

                console.log(eventResponse.data.items);
                return response.status(200).send(eventResponse.data.items)
                
            } 
            catch(error) {

                return response.status(500).send("Something went wrong");

            }
        } 
        catch (error) {

            return response.status(500).send("Something went wrong");

        }
    });

});


router.post("/login", (request, response) => {

    console.log(request.body);

    const { emailUsername, password } = request.body;

    // Following mongoose query will find the stylist by username or email. If there are multiple stylists by the 
    // same email or username mongoose will grab the first one it finds and return;
    const query = { $or: [{ email: emailUsername }, { username: emailUsername } ] };

    Stylist.findOne(query, (error, stylist) => {

        if(error) return response.status(500).send("Something went wrong");

        // if stylist doesn't exist return with an error message
        if(!stylist) return response.status(404).send("Stylist Doesn't Exist");

        // check to see if password is correct
        bcrypt.compare(password, stylist.password, (bycryptError, isMatch) => {

            // if error is of bcrypt send the error message
            if(bycryptError) return response.status(500).send("Something went wrong");

            // If passwords match
            if(isMatch) {

                // jwt expiresIn option is measured in seconds
                jwt.sign(
                    {id: stylist._id},
                    process.env.JWT_SECRET_KEY,
                    {expiresIn: 3600},
                    (jwtError, token) => {
                        // if error is of jwt send the error message
                        if(jwtError) return response.status(500).send("Something went wrong");

                        // with maxAge httpOnly must be set to false, otherwise cookie won't be saved in browser
                        response.cookie("jwtToken", token, {maxAge: 3600000, httpOnly: false});


                        const stylistHasAddedGoogleCalendar = stylist.refreshToken ? "Yes" : "No"; 

                        const stylistInfo = {
                            username: stylist.username,
                            email: stylist.email,
                            stylistHasAddedGoogleCalendar
                        };
                        
                        return response.status(200).json(stylistInfo);
                    }
                );
            } 
            // If passwords don't match
            else {
                response.status(401).send("Incorrect password");
            }
        });

    });

});


router.post("/add-stylist", (request, response) => {

    let { firstName, lastName, username, email, password } = JSON.parse(request.body.stylistInfo);
    const workSchedules = JSON.parse(request.body.workSchedules);

    // Getting the file from req.files
    let imageFile = request.files !== null ? request.files.file : null;
    // Creating the imgUrl 
    let imageUrl = imageFile !== null ? "http://localhost:7070/images/" + imageFile.name : "";
    // Need to save the filename as well, to be able to display the filename when user clicks on the update on frontend
    let imageFilename = imageFile !== null ? imageFile.name : "";

    Stylist.findOne({ email }, (err, stylist) => {

        if(err) return response.status(500).send("Something went wrong");

        if(stylist) return response.status(403).send("stylist already exists");

        const newStylist = new Stylist({ 
            firstName, 
            lastName, 
            username,
            email, 
            password, 
            status: "active",
            imageFilename, 
            imageUrl,
            refreshToken: "",
            workSchedule: workSchedules 
        });

           
        bcrypt.genSalt(10, (saltError, salt) => {
            
            if(saltError) return response.status(500).send("Something went wrong");

            bcrypt.hash(newStylist.password, salt, (hashError, hash) => {

                if(hashError) return response.status(500).send("Something went wrong");

                newStylist.password = hash;
                
                newStylist.save(saveError => {

                    if(saveError) return response.status(500).send("Something went wrong");

                    // If there is a image file sent from frontend upload it
                    if(imageFile !== null) {

                        // mv method is given by express-fileupload package
                        imageFile.mv(`./public/images/${imageFile.name}`, uploadError => {

                            if(uploadError) return response.status(500).send("Something went wrong");

                            return response.status(201).send("stylist successfully added");

                        });

                    } else {

                        // If there is no image file then just send the success message
                        return response.status(201).send("stylist successfully added");
                        
                    }
                    
                });

            });
                
        });
    });
});


router.post("/update", (request, response) => {

    const { _id } = request.body;
    let { firstName, lastName, username, email } = JSON.parse(request.body.stylistInfo);
    const workSchedules = JSON.parse(request.body.workSchedules);

    // Getting the file from req.files
    let imageFile = request.files !== null ? request.files.file : null;
    // Creating the imgUrl 
    let imageUrl = imageFile !== null ? "http://localhost:7070/images/" + imageFile.name : "";
    // Need to save the filename as well, to be able to display the filename when user clicks on the update on frontend
    let imageFilename = imageFile !== null ? imageFile.name : "";


    Stylist.findOne({ _id }, (error, stylist) => {

        if(error) return response.status(500).send("Something went wrong");

        // If there is a image file in the request then we need to perform two if checks. 
        // 1. 
        if(imageFile !== null) {

            // If the stylist already had a profile picture uploaded previously we need to delete it first. And then
            // need to upload the new image sent from frontend
            if(stylist.imageUrl) {

                // First, need to remove the previous file from file system
                fs.unlink(`./public/images/${stylist.imageFilename}`, unlinkError => {
                    
                    if(unlinkError) return response.status(500).send("Something went wrong");

                    // Now upload the new image file
                    imageFile.mv(`./public/images/${imageFilename}`, uploadError => {

                        if(uploadError) return response.status(500).send("Something went wrong");

                        // Updating the fields
                        stylist.firstName = firstName;
                        stylist.lastName = lastName;
                        stylist.username = username;
                        stylist.email = email;
                        stylist.workSchedule = workSchedules;
                        stylist.imageUrl = imageUrl;
                        stylist.imageFilename = imageFilename;

                        stylist.save(saveError => {

                            if(saveError) return response.status(500).send("Something went wrong");

                            return response.status(201).send("Stylist Details updated");
                            
                        });
                        
                    });
                    
                });            

            } else {

                // Upload the new image file
                imageFile.mv(`./public/images/${imageFilename}`, uploadError => {

                    if(uploadError) return response.status(500).send("Something went wrong");

                    // Updating the fields
                    stylist.firstName = firstName;
                    stylist.lastName = lastName;
                    stylist.username = username;
                    stylist.email = email;
                    stylist.workSchedule = workSchedules;
                    stylist.imageUrl = imageUrl;
                    stylist.imageFilename = imageFilename;

                    stylist.save(saveError => {

                        if(saveError) return response.status(500).send("Something went wrong");

                        return response.status(201).send("Stylist Details updated");
                        
                    });
                    
                });
            }
        } else {

            // Updating the fields
            stylist.firstName = firstName;
            stylist.lastName = lastName;
            stylist.username = username;
            stylist.email = email;
            stylist.workSchedule = workSchedules;

            stylist.save(saveError => {

                if(saveError) return response.status(500).send("Something went wrong");

                return response.status(201).send("Stylist Details updated");
                
            });

        }

    });

});

router.post("/update-token", async (request, response) => {

    const { username, authCode } = request.body;

    try {

        // Calling google api for access & refresh token in exchange of authorization code received from user oauth consent
        const endpoint = "https://oauth2.googleapis.com/token?";
        const p1 = `code=${authCode}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&`;
        const p2 = `redirect_uri=${process.env.STYLIST_REDIRECT_URI}&grant_type=${process.env.GRANT_TYPE}`;
        const params = p1 + p2;

        const uri = endpoint + params;

        const authResponse = await axios.post(uri, {  headers: { "Content-Type": "application/x-www-form-urlencoded" } });

        // Refresh token received from google 
        const refreshToken = await authResponse.data.refresh_token;

        // If something goes wrong authResponse.data won't have a refresh_token field. But reponse would still be 
        // 200 ok. I don't know why but my guess is - if a google account ever denies to give access to it's
        // google calendar then it can't never ever use that google account to give access. Google will mark it as 
        // suspicious and application would break. So return with an error message to avoid breaking the application;
        const message =  `Oops! Google didn't let you add your calendar to this application, please go to your Google 
        account and set allow third party apps to have access settings on, if you still have problems, use Google Chrome.
        Yes, this is weird but we don't have anything to do with it`;
        if(!refreshToken) return response.status(500).send(message);

        Stylist.findOne({ username }, (error, stylist) => {

            if(error) return response.status(500).send("Something went wrong");

            console.log(stylist);
            console.log(refreshToken);

            // Updating refreshToken previously set as empty string with refresh_token received from google oauth token response
            stylist.refreshToken = refreshToken;
            stylist.save(err => {

                if(err) return response.status(500).send("Save Error - Something went wrong");

                return response.status(201).send("success");
            });
        }); 

    } catch(error) {

        return response.status(500).send("Something went wrong");

    }
});



router.post("/change-password", (request, response) => {

    const { _id } = request.body;

    const { oldPassword, newPassword } = request.body.passwordInfo;


    Stylist.findOne({ _id }, (error, stylist) => {

        if(error) return response.status(500).send("Something went wrong");


        bcrypt.compare(oldPassword, stylist.password, (bycryptError, isMatch) => {

            if(bycryptError) return response.status(500).send("Something went wrong");

            // If passwords match
            if(isMatch) {

                bcrypt.genSalt(10, (saltError, salt) => {
            
                    if(saltError) return response.status(500).send("Something went wrong");
        
                    bcrypt.hash(newPassword, salt, (hashError, hash) => {
        
                        if(hashError) return response.status(500).send("Something went wrong");
        
                        stylist.password = hash;
                        
                        stylist.save(saveError => {
        
                            if(saveError) return response.status(500).send("Something went wrong");

                            return response.status(201).send("Password updated");
                            
                        });
        
                    });
                        
                });
               
            } 
           
            else {
                return response.status(400).send("Incorrect password");
            }
        });


    });
});


router.get("/logout", (req, response) => {

    console.log(req);

    console.log("hello world");
    
    response.clearCookie("jwtToken");
    return response.status(200).send("Logout successful");

});






module.exports = router;

