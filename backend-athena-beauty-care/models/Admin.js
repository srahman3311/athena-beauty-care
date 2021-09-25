const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true },
    workingLocation: { type: String, required: true},
    imageFilename: { type: String },
    calendarAccessCode: { type: String }
});

// For Search Functionality
adminSchema.index({'$**': 'text'});

// Model
const Admin = mongoose.model("Admin", adminSchema);






// bcrypt.genSalt(10, (err, salt) => {
//     if(err) throw err;

//     let newAdmin = new Admin({
//         firstName: "Rafez",
//         lastName: "Rahman",
//         email: "rafez3311@gmail.com",
//         password: "rafez123",
//         status: "active",
//         imageFilename: "",
//         workingLocation: "Athena Beauty Care - Location 2",
//         calendarAccessCode: ""
//     });

//     bcrypt.hash(newAdmin.password, salt, (err, hash) => {

//         if(err) throw err;
//         newAdmin.password = hash;

//         newAdmin.save(err => console.log("admin saved"));
//     });

// });




// To add a field that doesn't exist in a collection - first thing needed to do is add that field in schema. In this case I 
// added a new field workingLocation in the schema first and then called the following mongoose method to update. It worked. 
/*
Admin.updateMany({}, {$set: {workingLocation: "Location 1"}}, (err, results) => {
    console.log(results);
})
*/



module.exports = Admin;