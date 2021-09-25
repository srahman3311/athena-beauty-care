const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true},
    zipCode: { type: String}
});

// For Search Functionality
locationSchema.index({'$**': 'text'});

// Model
const Location = mongoose.model("Location", locationSchema);



// let newLocation = new Location({
//     name: "Athena Beauty Care - Location 2",
//     address1: "Street 321, xyz town",
//     address2: "If there is more info",
//     city: "The Hague",
//     country: "Netherelands",
//     phone: "123 4567 8910",
//     zipCode: "ABCD25478"
// });

// newLocation.save(err => console.log("Location saved"));





module.exports = Location;