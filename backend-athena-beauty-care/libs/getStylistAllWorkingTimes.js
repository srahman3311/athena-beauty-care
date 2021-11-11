const times = require("./times");


const getStylistAllWorkingTimes = (startTime, endTime) => {


    const startTimeIndex = times.indexOf(startTime);
    const endTimeIndex = times.indexOf(endTime);


    const stylistWorkingTimes = [];


    for(let i = startTimeIndex; i <= endTimeIndex; i++) {

        stylistWorkingTimes.push(times[i]);

    }


    return stylistWorkingTimes


}


module.exports = getStylistAllWorkingTimes;