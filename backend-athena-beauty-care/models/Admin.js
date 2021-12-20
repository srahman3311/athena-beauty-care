const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true },
    designation: { type: String, required: true},
    imageUrl: { type: String },
    refreshToken: { type: String }
});

// For Search Functionality
adminSchema.index({'$**': 'text'});

// Model
const Admin = mongoose.model("Admin", adminSchema);






// bcrypt.genSalt(10, (err, salt) => {
//     if(err) throw err;

//     let newAdmin = new Admin({
//         firstName: "Rafez3",
//         lastName: "Rahman",
//         email: "samsur.rahman3311@gmail.com",
//         username: "Rafez3123",
//         password: "Rafez3123",
//         status: "active",
//         designation: "MD",
//         imageUrl: "",
//         refreshToken: ""
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