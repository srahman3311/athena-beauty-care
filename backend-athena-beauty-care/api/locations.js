const router = require("express").Router();
const Location = require("../models/Location");





// For AddEvent and AddStylist Components
router.get("/", async (request, response) => {


    // To know the total length of data found with the searchText
    Location.find({}, (error, locations) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        return response.status(200).json({ locations });

    });
    

});





router.post("/", async (request, response) => {

    const { searchText, skip, limit } = request.body;

    
    

    // As LIKE in MySQL
    // For multiple fields
    let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
    const query = { $or: [{title: regex }, {city: regex}, {country: regex}] }

    // To know the total length of data found with the searchText
    Location.find(query, (error, totalLocations) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        // This database query is to get the data after skipping and limiting
        Location.find(query).limit(limit).skip(skip).exec((newError, locations) => {

            if(newError) return response.status(500).json({msg: "Something went wrong, probably server error"});
    
            return response.status(200).json({locations, dataLength: totalLocations.length});
        });

    });
    

});





router.post("/add-location", (request, response) => {


    const { title, address1, address2, city, country, phone, zipCode } = request.body;


    Location.findOne({ title }, (error, location) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});
          
        // If a location is found then return with 403 error message(403 means exists)
        if(location) return response.status(403).json({msg: `Location with the title '${ title }' already exists`});


        // if no location is found then location will be null, which is a falsy value in JavaScript. In that case add a
        // new location with the information sent from the frontend
        const newLocation = new Location({ title, address1, address2, city, country, phone, zipCode })

        newLocation.save(saveError => {

            if(saveError) return response.status(500).json({msg: "Something went wrong, probably server error"});

            return response.status(200).json({msg: "New location has been successfully added"});

        });

    });

});







router.post("/update", (request, response) => {


    // Destructuring request.body
    const { locationId, title, address1, address2, city, country, phone, zipCode } = request.body;


    // Putting the fields need to be updated inside an object
    const fieldsToUpdate = { title, address1, address2, city, country, phone, zipCode };


    Location.findOneAndUpdate({ _id: locationId }, fieldsToUpdate, error => {

        if(error) return response.status(500).send(error);

        return response.status(200).json({msg: "Location Details have been successfully updated"});

       
    });



});




















router.post("/delete", (request, response) => {


    const { _id, searchText, skip, limit } = request.body;


    Location.deleteOne({ _id }, error => {

        if(error) return response.status(500).send(error);

        // As LIKE in MySQL
        // For multiple fields
        let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
        const query = { $or: [{title: regex }, {city: regex}, {country: regex}] }

        // To know the total length of data found with the searchText
        Location.find(query, (newError, totalLocations) => {

            if(newError) return response.status(500).json({msg: "Something went wrong, probably server error"});

            // This database query is to get the data after skipping and limiting
            Location.find(query).limit(limit).skip(skip).exec((newNewError, locations) => {

                if(newNewError) return response.status(500).json({msg: "Something went wrong, probably server error"});
        
                return response.status(200).json({locations, dataLength: totalLocations.length});
            });

    });


          
        

    });

});



















module.exports = router;




