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





module.exports = router;

