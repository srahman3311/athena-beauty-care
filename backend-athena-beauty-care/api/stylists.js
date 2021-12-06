const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
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
    const query = { $or: [{ firstName: regex }, { lastName: regex }, { email: regex }] }

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



    const { firstName, lastName, email, password } = request.body.stylistInfo;
    const { addedWorkSchedules: workSchedule } = request.body;

    console.log(firstName, lastName, email, password, workSchedule);

  
    Stylist.findOne({ email }, (err, stylist) => {

            if(err) return response.status(500).send(err);

            if(stylist) return response.status(400).json({msg: "stylist already exists"});

            console.log("hi");
            
            const newStylist = new Stylist({ 
                firstName, 
                lastName, 
                email, 
                password, 
                status: "active",
                imageFilename: "", 
                refreshToken: "",
                workSchedule 
            });

            bcrypt.genSalt(10, (err, salt) => {
             
                if(err) return response.status(500).send(err);

                bcrypt.hash(newStylist.password, salt, (err, hash) => {

                    if(err) return response.status(500).send(err);

                    newStylist.password = hash;
        
                    
                    newStylist.save(err => {

                        if(err) return response.status(500).send(err);

                        return response.status(200).json({msg: "stylist successfully added"});
                    });
                });
                   
            });
    });
});





module.exports = router;

