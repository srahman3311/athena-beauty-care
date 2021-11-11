const mongoose = require("mongoose");
const Location = require("../models/Location");
const findBusyTimes = require("./findBusyTimes");


const calculateEventTimes = (date, startTime, eventDuration) => {

    const newDate = new Date(date);

    const year = newDate.getFullYear().toString();
    let month = (newDate.getMonth() + 1).toString();
    let day = newDate.getDate().toString();


    const busyTimes = findBusyTimes(eventDuration + 15, `${year}-${month}-${day}T${startTime}`)

    const newStartTime = `${year}-${month}-${day}T${startTime}`;
    const newEndTime = busyTimes[busyTimes.length - 1];

    return { newStartTime, newEndTime };


}


module.exports = calculateEventTimes;