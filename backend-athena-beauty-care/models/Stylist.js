const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const workScheduleSchema = new mongoose.Schema({
    location: { type: String, required: true},
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: {type: String, required: true }
});

const stylistSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true },
    imageFilename: { type: String },
    refreshToken: { type: String },
    workSchedule: [workScheduleSchema]
});

// For Search Functionality
stylistSchema.index({"$**": "text"});

// Model
const Stylist = mongoose.model("Stylist", stylistSchema);





/*
bcrypt.genSalt(10, (err, salt) => {
    if(err) throw err;

    const schedule1 = {
        location: "Location 1",
        day: "Monday",
        startTime: "10:00",
        endTime: "16:30"
    }

    const schedule2 = {
        location: "Location 2",
        day: "Tuesday",
        startTime: "10:00",
        endTime: "15:00"
    }

    const schedule3 = {
        location: "Location 1",
        day: "Wednesday",
        startTime: "10:00",
        endTime: "16:00"
    }

    const schedule4 = {
        location: "Location 1",
        day: "Thursday",
        startTime: "12:30",
        endTime: "16:30"
    }

    const schedule5 = {
        location: "Location 2",
        day: "Thursday",
        startTime: "12:00",
        endTime: "16:30"
    }

    let newStylist = new Stylist({
        firstName: "Jennifer",
        lastName: "Gorgeous",
        email: "jennifer.gorgeous@gmail.com",
        password: "jennifer123",
        status: "active",
        imageFilename: "",
        refreshToken: "",
        workSchedule: [schedule1, schedule2, schedule3, schedule4, schedule5]
    });

    bcrypt.hash(newStylist.password, salt, (err, hash) => {

        if(err) throw err;
        newStylist.password = hash;

        newStylist.save(err => console.log("Stylist saved"));
    });

});

*/

// To add a field that doesn't exist in a collection - first thing needed to do is add that field in schema. In this case I 
// added a new field workingLocation in the schema first and then called the following mongoose method to update. It worked. 
/*
Stylist.updateMany({}, {$set: {workingLocation: "Location 1"}}, (err, results) => {
    console.log(results);
})
*/



module.exports = Stylist;