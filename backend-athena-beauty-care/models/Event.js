const mongoose = require("mongoose");




const eventSchema = new mongoose.Schema({
    // eventDate: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    title: { type: String, required: true },
    treatmentCategory: { type: String, required: true },
    treatmentName: { type: String, required: true },
    stylist: { type: String, required: true },
    eventDuration: { type: Number, required: true},
    eventLocation: { type: String, required: true },
    clientName: { type: String },
    clientEmail: { type: String, required: true },
    clientPhone: { type: String },
    description: { type: String },
    eventPrice: { type: Number, required: true },
    status: { type: String, required: true}
});

// For Search Functionality
eventSchema.index({'$**': 'text'});

// Model
const Event = mongoose.model("Event", eventSchema);




// const newEvent = new Event({
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

// newEvent.save(err => console.log("new Event added"));


module.exports = Event;