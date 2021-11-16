const times = [
    "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", 
    "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", 
    "16:00", "16:15", "16:30", "16:45", "17:00"
];

// 2021-11-15

export const getWorkingTimes = (datesArray, allStylists, newTreatments, location) => {

    const stylistsWorkingTimesOnAvailableDates = [];

    // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.
    datesArray.forEach(date => {
        
        const newDate = new Date(date);

        // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name
        const dayName = newDate.toLocaleDateString("en-US", { weekday: "long" });

        // No stylist has workSchedule on Saturday and Sunday so end the current iteration here
        if(dayName === "Saturday" || dayName === "Sunday") return;

        const temp = [];

        // Loot through all stylists to be able to loop through their workSchedule 
        allStylists.forEach(stylist => {

            // Only one from the stylist workSchedule array will match with the current date iteration, if it's found no need to
            // loop through the rest of the schedules
            for(let p = 0; p < stylist.workSchedule.length; p++) {

                const schedule = stylist.workSchedule[p];

                if(schedule.location === location && schedule.day === dayName) {

                    // Array of times above has all the possible working times. startTimeIndex is the index of time from the times
                    // array, endTimeIndex is the 

                    // Check which times from the times array above match with the working start and end time of the current stylist
                    // on current date. We need to put all the times starting from startTime and ending at endTime
                    const startTimeIndex = times.indexOf(schedule.startTime);
                    const endTimeIndex = times.indexOf(schedule.endTime);

                    const workingTimes = [];

                    for(let q = startTimeIndex; q <= endTimeIndex; q++) {
                        workingTimes.push(times[q]);
                    }

                    temp.push({ stylist: stylist.firstName + " " + stylist.lastName, workingTimes});

                    break;
                }
            }

        });

        // Say day of current date iteration is Monday and all stylists are available on this day at the requested location. It
        // means a 
        if(temp.length === newTreatments.length) stylistsWorkingTimesOnAvailableDates.push({ date, stylistWorkingTimes: temp});

    });

    return stylistsWorkingTimesOnAvailableDates;

}