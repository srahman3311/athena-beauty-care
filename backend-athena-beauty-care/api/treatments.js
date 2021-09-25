const router = require("express").Router();
const Treatment = require("../models/Treatment");






router.get("/", (request, response) => {
    
    Treatment.find((error, treatments) => {

        if(error) return response.status(500).json({msg: "Something went wrong"});

        return response.status(200).json({treatments});
        
    });

});


router.post("/", (request, response) => {

    response.send("hi");

});




    
 


module.exports = router;




