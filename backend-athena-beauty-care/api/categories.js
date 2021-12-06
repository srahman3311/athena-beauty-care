const router = require("express").Router();
const Category = require("../models/Category");





// For AddTreatment frontend component
router.get("/", (request, response) => {

    
    Category.find({}, (error, categories) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        return response.status(200).json(categories);

    });

});




router.post("/", async (request, response) => {

    const { searchText, skip, limit } = request.body;

    
    

    // As LIKE in MySQL
    // For multiple fields
    let regex = new RegExp(searchText, "i"); // 'i' here to ignore case-sensitivity
    const query = { $or: [{title: regex }] }

    // To know the total length of data found with the searchText
    Category.find(query, (error, totalCategories) => {

        if(error) return response.status(500).json({msg: "Something went wrong, probably server error"});

        // This database query is to get the data after skipping and limiting
        Category.find(query).limit(limit).skip(skip).exec((newError, categories) => {

            if(newError) return response.status(500).json({msg: "Something went wrong, probably server error"});
    
            return response.status(200).json({items: categories, totalItemCount: totalCategories.length});
        });

    });
    

});





router.post("/add-category", (request, response) => {

    const { title } = request.body;


    Category.findOne({ title }, (error, category) => {

        if(error) return response.status(500).send("Something went wrong");
          
        // If a Category is found then return with 403 error message(403 means exists)
        if(category) return response.status(403).send(`Error - Category already exists`);


        // if no Category is found then Category will be null, which is a falsy value in JavaScript. In that case add a
        // new Category with the information sent from the frontend
        const newCategory = new Category({ title })

        newCategory.save(saveError => {

            if(saveError) return response.status(500).send("Something went wrong");

            return response.status(201).send("Saved");

        });

    });

});







router.post("/update", (request, response) => {

    // Destructuring request.body
    const { categoryId, title } = request.body;

    Category.findOne({ title }, (error, category) => {

        if(error) return response.status(500).send("Something went wrong");
        if(category) return response.status(403).send("A category with the same title already exists");

        // Putting the fields need to be updated inside an object
        const fieldsToUpdate = { title };


        Category.findOneAndUpdate({ _id: categoryId }, fieldsToUpdate, updateError => {

            if(updateError) return response.status(500).send("Something went wrong");

            return response.status(201).send("Updated");

        
        });

    });

    



});




















router.post("/delete", (request, response) => {


    const { _id } = request.body;

    Category.deleteOne({ _id }, error => {

        if(error) return response.status(500).send("Something went wrong");

        return response.status(200).json({msg: "Deleted"});

    });

});



















module.exports = router;









