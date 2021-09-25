const router = require("express").Router();
const Category = require("../models/Category");






router.get("/", (request, response) => {
    
    Category.find((error, categories) => {

        if(error) return response.status(500).json({msg: "Something went wrong"});

        return response.status(200).json({categories});
        
    });

});


router.post("/", (request, response) => {

    response.send("hi");

});




    
 


module.exports = router;




