// After client's treatments selection we need to loop through the treatments and for each treatment we need to make api
// calls to backend to add event to google calendar and in our database. For each treatment we need to calculate start 
// and end time in format which is accepted by google calendar api, like - 2021-12-20T16:45


const calculateStartEndTimes = (selectedDateTime, treatments) => {

    const date = selectedDateTime.substring(0, selectedDateTime.indexOf("T"));
    const time = selectedDateTime.substring(selectedDateTime.indexOf("T") + 1, selectedDateTime.length);

    let hour = Number(time.substring(0, 2));
    let minute = Number(time.substring(3, 5));


    const eventStartEndTimes = [];

    // For first iteration start hour and minute will be client's choosen start hour and minute. But
    // after each iteration start hour and minute will change. For example - let's say client chose 10:00 
    // as the start time and the treatmentDuration of the first treatment of the selected treatments array is 
    // 75 minutes. So for the first treatment end time will be 11:15. Now at second iteration 11:15 should be the
    // start hour and minute for the second treatment, which means for each iteration end hour time will be the start
    // hour time of next iteration   
    let startHour = hour;
    let startMinute = minute;

    for(let x = 0; x < treatments.length; x++) {

        const treatment = treatments[x];

        // treatmentDuration could be any minute, but we need to calculate the start and end minutes based on 15 minutes
        // interval. Math.ceil method rounds the number with the higher value. For example - 3.40 will be 4 
        const intervals = Math.ceil(treatment.treatmentDuration / 15);
        
        // Now we need to add the treatmentDuration(based on 15 minutes interval) to the start minute
        const minutesToAdd = startMinute + (intervals * 15);

        // Let's say minutesToAdd is 45 so hourToAdd will be 0. If minutesToAdd is 75 (minutesToAdd will always be
        // divisible by 15, we made sure above) then hourToAdd will be 1
        const hourToAdd = Math.floor(minutesToAdd / 60);

        // Now add the hourToAdd with startHour. If start hour was 10 and hourToAdd is 1 then endHour will be 11
        const endHour = startHour + hourToAdd;

        // If hourToAdd is 0 then endMinute will be minutesToAdd
        let endMinute = minutesToAdd;

        // If hourToAdd is more than or equal to 1 then we must calculate the endMinute. Let's say - minutesToAdd was 75
        // so hourToAdd will be 1 and we will have 15 minutes in hand. So end minute will be 15
        if(hourToAdd >= 1) endMinute = minutesToAdd - (60 * hourToAdd);

        // Let's say start time was 11:15 and minutesToAdd was 45 minutes so we will have 0 as end minute after 
        // adding 1 with the hour (15 + 45 equals 60 mins or 1 hour). But in event's time format it can't be a single 0
        if(endMinute === 0) endMinute = "00";

        // Start minute will be dynamic after the first and on every consecutive iteration. If start minute is 0 after
        // an iteration then we must add another 0 with it be make it consistent with event's time format
        if(startMinute === 0) startMinute = "00";

        const eventStartTime = `${date}T${startHour}:${startMinute}`
        const eventEndTime = `${date}T${endHour}:${endMinute}`;

        eventStartEndTimes.push({ eventStartTime, eventEndTime });

        // Current iteration is about to finish, for next iteration start hour will be this iteration's end hour and
        // start minute will be this iteration's end minute
        startHour = endHour;
        startMinute = endMinute;

        // If end minute was 0 then we had updated with 00 to make it consistent with event's time format. And as this
        // iteration's end minute is going to be the start minute of next iteration so we need to set it to integer 0.
        // As we need to perform some mathmetical calculations on startMinute on next iteration
        if(endMinute === "00") startMinute = 0;

       
    }

    return eventStartEndTimes;

}


module.exports = calculateStartEndTimes;