//

export const findBusyTimes = (eventDuration, startingMinute, startingHour) => {

    for(let i = 1; i < Math.ceil(eventDuration / 15); i++) {

        let interval = (15 * i) + startingMinute;
        let hour = startingHour;

        // interval / 60 gives us the value which should be added to hour. For example - if interval is 
        // 75 then we must add 1 with hour 
        let hourIncrement = Math.floor(interval / 60);

        // Adding hour increment with hour
        hour += hourIncrement;

        // if hourIncrement is more than or equal to 1 then interval value must be re-calculated
        if(hourIncrement >= 1) {
            interval = interval - (60 * hourIncrement);
        }

        // if interval is 0 then add extra one 0 to keep the minute value in two digits
        if(interval === 0) interval += "0";

        // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute
        if(hour < 10) return `0${hour}:${interval}`;
        
        return `${hour}:${interval}`;
        
    }
}