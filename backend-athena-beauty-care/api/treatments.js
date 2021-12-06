const router = require("express").Router();
const Treatment = require("../models/Treatment");



// For client UI Treatment component
router.get("/", (request, response) => {

    Treatment.find({}, (error, treatments) => {

        if(error) return response.status(500).json({ msg: "Something went wrong" });

        return response.status(200).json(treatments);

    });

});



router.post("/", async (request, response) => {

    const { searchText, skip, limit } = request.body;

    // As LIKE in MySQL
    // For multiple fields
    let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
    const query = { $or: [{title: regex }, {description: regex}, {country: regex}] }

    // To know the total length of data found with the searchText
    Treatment.find(query, (error, totalTreatments) => {

        if(error) return response.status(500).send(error);

        // This database query is to get the data after skipping and limiting
        Treatment.find(query).limit(limit).skip(skip).exec((newError, treatments) => {

            if(newError) return response.status(500).send(newError);
    
            return response.status(200).json({treatments, dataLength: totalTreatments.length});
        });

    });

});

// For AddEvent frontend component
router.post("/find-by-category", async (request, response) => {


    const { category } = request.body;

    Treatment.find({ category }, (error, treatments) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        return response.status(200).json({ treatments });

    });
    
});





router.post("/add-treatment", (request, response) => {

    // return console.log(request.body);

    let { category, title, description, duration, price, stylists, remarks } = request.body;

    // duration and price has been sent as string, convert them into numbers otherwise data won't be saved in DB
    duration = Number(duration);
    price = Number(price);


    Treatment.findOne({ title }, (error, treatment) => {

        if(error) return response.status(500).send(error);
          
        // If a Treatment is found then return with 403 error message(403 means exists)
        if(treatment) return response.status(403).json({msg: `Treatment with the title '${ title }' already exists`});


        // if no Treatment is found then Treatment will be null, which is a falsy value in JavaScript. In that case add a
        // new Treatment with the information sent from the frontend
        const newTreatment = new Treatment({ category, title, description, duration, price, stylists, remarks })

        newTreatment.save(saveError => {

            if(saveError) return response.status(500).send(error);

            return response.status(200).json({msg: "New Treatment has been successfully added"});

        });

    });

});







router.post("/update", (request, response) => {


    // Destructuring request.body
    const { treatmentId, category, title, description, duration, price, stylists, remarks } = request.body;


    // Putting the fields need to be updated inside an object
    const fieldsToUpdate = { category, title, description, duration, price, stylists, remarks };


    Treatment.findOneAndUpdate({ _id: treatmentId }, fieldsToUpdate, error => {

        if(error) return response.status(500).send(error);

        return response.status(200).json({msg: "Treatment Details have been successfully updated"});

       
    });



});




















router.post("/delete", (request, response) => {


    const { _id, searchText, skip, limit } = request.body;


    Treatment.deleteOne({ _id }, error => {

        if(error) return response.status(500).send(error);

        // As LIKE in MySQL
        // For multiple fields
        let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
        const query = { $or: [{title: regex }, {category: regex}, {description: regex}] }

        // To know the total length of data found with the searchText
        Treatment.find(query, (newError, totalTreatments) => {

            if(newError) return response.status(500).send(newError);

            // This database query is to get the data after skipping and limiting
            Treatment.find(query).limit(limit).skip(skip).exec((newNewError, treatments) => {

                if(newNewError) return response.status(500).send(newNewError);;
        
                return response.status(200).json({treatments, dataLength: totalTreatments.length});
            });

    });


          
        

    });

});



















module.exports = router;





