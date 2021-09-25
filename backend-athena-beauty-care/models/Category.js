const mongoose = require("mongoose");




const categorySchema = new mongoose.Schema({
    title: { type: String, required: true }
});

// For Search Functionality
categorySchema.index({'$**': 'text'});

// Model
const Category = mongoose.model("Category", categorySchema);




// const newCategory = new Category({
//     title: "Epilation"
// });

// newCategory.save(err => console.log("new category added"));


module.exports = Category;