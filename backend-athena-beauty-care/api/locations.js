const router = require("express").Router();
const Location = require("../models/Location");




router.get("/", (request, response) => {
    
    Location.find((error, locations) => {

        if(error) return response.status(500).json({msg: "Something went wrong"});

        return response.status(200).json({locations});
        
    });

});



module.exports = router;




