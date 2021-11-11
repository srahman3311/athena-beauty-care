const mongoose = require("mongoose");




const treatmentSchema = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    stylists: [{ type: String, required: true }],
    remarks: { type: String }
});

// For Search Functionality
treatmentSchema.index({'$**': 'text'});

// Model
const Treatment = mongoose.model("Treatment", treatmentSchema);




// const newTreatment = new Treatment({
//     category: "Epilation",
//     title: "Epilation - 3rd Time",
//     description: "Please book this appointment only if you have had a browse shaping appointment with us within the past three months. If it is your first time or you are coming back after three months or longer, book brows shaping first time.",
//     duration: 30,
//     price: 14.99,
//     stylists: ["Athena Gorgeous", "Suzanne", "Soudi Hemshpire"],
//     // stylists: ["Athena Gorgeous", "Suzanne", "Nicole"],
//     // stylists: ["Athena Gorgeous", "Suzanne", "Janae", "Jennifer"],
//     // stylists: ["Athena Gorgeous", "Janae", "Jennifer"],
//     remarks: ""
// });

// newTreatment.save(err => console.log("new treatment added"));


module.exports = Treatment;