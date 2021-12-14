// Modules needed to fetch events
import { fetchEvents } from "./helper-functions/fetchEvents";
import { getDates } from "./helper-functions/getDates";
import { getStylists } from "./helper-functions/getStylists";
import { getWorkingTimes } from "./helper-functions/getWorkingTimes";

const defaultTimesArray = [
    "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", 
    "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", 
    "16:00", "16:15", "16:30", "16:45", "17:00"
]

export const findTimeSlots = async (newTreatments) => {

    /*
    const newTreatments = [
        {
            category: "Permanent Makeup",
            choosenStylist: "Jennifer Gorgeous",
            location: "Athena Beauty Care - Bogur",
            treatmentDuration: 85,
            treatmentPrice: 23,
            treatmentTitle: "Permanent Makeup with light massage"
        },
        {
            category: "Massage",
            choosenStylist: "Andrea Gorgeous",
            location: "Athena Beauty Care - Bogur",
            treatmentDuration: 75,
            treatmentPrice: 42,
            treatmentTitle: "Massage for 30 mins"
        },
        {
            category: "Brows",
            choosenStylist: "Athena Gorgeous",
            location: "Athena Beauty Care - Bogur",
            treatmentDuration: 35,
            treatmentPrice: 45,
            treatmentTitle: "Shaping brows"
        }

    ];
    */


    // Calculate total 30 dates in the format 'year-month-date' format starting from today
    const datesArray = getDates();

    // Putting the location info in a variable
    const location = newTreatments[0].location;
    
    // Fetching information of all stylists as per all treatments
    const allStylists = await getStylists(newTreatments);
    console.log(allStylists);

    // Fetching calendar events of all stylists
    const calendarEvents = await fetchEvents();
    //console.log("Calendar events: ", calendarEvents);



    // Find the dates when all stylists are available at the requested location. Also find all the workingTimes of all stylists
    // on those dates
    const stylistsWorkingTimesOnAvailableDates = getWorkingTimes(datesArray, allStylists, newTreatments, location);

   

    console.log(stylistsWorkingTimesOnAvailableDates);

    // const stylistsFreeTimesOnAvailableDates = findFreeTimes(stylistsWorkingTimesOnAvailableDates, calendarEvents);
    // console.log(stylistsFreeTimesOnAvailableDates);


    
    const stylistsFreeTimesOnAvailableDates = [];

    stylistsWorkingTimesOnAvailableDates.forEach(workingTime => {

        const xxx = [];

        workingTime.stylistWorkingTimes.forEach(item => {

            const busyTimes = [];

            calendarEvents.forEach(event => {

                const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));

                const startingTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
                const startingHour = Number(startingTime.substring(0, 2));
                const startingMinute = Number(startingTime.substring(3, 5));

                
                if(event.status === "Active") {

                    if(eventDate === workingTime.date && event.stylist === item.stylist && event.eventLocation === location) {

                        for(let k = 0; k < Math.ceil(event.eventDuration / 15); k++) {
        
                            let interval = (15 * k) + startingMinute;
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
                            if(hour < 10) {
                            busyTimes.push(`0${hour}:${interval}`);
                            } else {
                                busyTimes.push(`${hour}:${interval}`);
                            }
                        }
                    
                    }
                }

            });

            const newWorkingTimes = item.workingTimes.filter(time => !busyTimes.includes(time));
            
            xxx.push({
                stylist: item.stylist,
                freeTimes: newWorkingTimes
            });

        });

        stylistsFreeTimesOnAvailableDates.push({ date: workingTime.date, stylistsAndTheirFreeTimes: xxx});


    });

    console.log(stylistsFreeTimesOnAvailableDates);
    




    // Reduce function accepts two arguments. First one is a function with two parameters and the second is initial value
    // If initial value is not explicitly defined (for following case, 0) then reduce function will by default take the
    // first item of the array as the initial value.   
    const countOfTimesToOmmit = newTreatments.reduce((total, treatment) => total + (Math.ceil(treatment.treatmentDuration / 15)), 0);
  

    console.log(defaultTimesArray.length);
    console.log(countOfTimesToOmmit);
    console.log(defaultTimesArray.length - countOfTimesToOmmit);

    const qqq = [];

    stylistsFreeTimesOnAvailableDates.forEach((date, index) => {

        // 2021-11-15

        // This array will be populated with all the starting free times of each date
        const availableTimesByDate = [];

        for(let i = 0; i < (defaultTimesArray.length + 1) - countOfTimesToOmmit; i++) {

            // 10:00

            // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
            // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
            // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
            // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
            let totalTimeCount = 0;

            // This is a temporary array which will be populated with free times of each stylist by looping through the 
            // stylistsWithFreeTimes array
            const temp = [];

            for(let j = 0; j < date.stylistsAndTheirFreeTimes.length; j++) {

                const item = date.stylistsAndTheirFreeTimes[j];
                
                // Count will determine how many free times should be looked for. For example if count is 3 and starting
                // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for
                const count = Math.ceil(newTreatments[j].treatmentDuration / 15); 
                
                // As said above totalTimeCount must be updated on each item of stylistsWithFreeTimes array
                totalTimeCount += count;

                // This is very crucial. On each item of stylistsWithFreeTimes array this startingTime will be updated,
                // for example - say we are at 09:00 on first item of stylistsWithFreeTimes array, count is 3
                // and stylist of this item is available on all three times 09:00, 09:15 & 9:30. So startingTime must be 
                // from 09:45 for the 2nd item of stylistsWithFreeTimes array. Say for the second item count is 4 and stylist
                // is available on all four times 09:45, 10:00, 10:15 & 10:30, so startingTime for the third item of the 
                //  stylistsWithFreeTimes array 10:45. 
                let startingTime = "";

                  
                // if temp length is zero then we are at the first item of stylistsWithFreeTimes array
                if(!temp.length) {
                    startingTime = defaultTimesArray[i];
                } else {
                    // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
                    // the next time after the time of last item of temp array. 
                    const y = defaultTimesArray.indexOf(temp[temp.length - 1]);
                    startingTime = defaultTimesArray[y + 1];
                }

                //
                let hour = Number(startingTime.substring(0, 2)); // 11
                let minutes = Number(startingTime.substring(3, 5)); // 30
        
                for(let k = 1; k <= count; k++) {

                    let hourIncrement = Math.floor(minutes / 60);
                    hour += hourIncrement;

                    if(hourIncrement >= 1) {
                        minutes = minutes - (60 * hourIncrement);
                    }

                    // if minutes is 0 then add extra one 0 to keep the minute value in two digits
                    if(minutes === 0) minutes += "0";

                    let time = "";

                    // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute
                    if(hour < 10) {
                        time = (`0${hour}:${minutes}`);
                    } else {
                        time = (`${hour}:${minutes}`);
                    }

                    //const freeTimes = item.freeTimesArray[index].freeTimes;
                    const freeTimes = item.freeTimes;
    
                    if(freeTimes.includes(time)) {
                        temp.push(time);
                    };

                    minutes = Number(minutes);
                    minutes += 15;

                }

                // Say startingTime is 09:00 & count is 3. So totalTimeCount is also 3. After first iteration temp.length 
                // must be equals to 3 otherwise it means that stylist is not available at all three times (09:00. 09:15 & 09:30)
                // In such case further iteration is not necessary. 
                if(temp.length < totalTimeCount) break;
            }

            if(totalTimeCount === temp.length) availableTimesByDate.push(defaultTimesArray[i]);
        }

        qqq.push({date: date.date, times: availableTimesByDate});
       

    
    });


    console.log(qqq);

    const dateTimesArray = [];

    qqq.forEach((dateTimes, index) => {

        const newDate = new Date(dateTimes.date);

        const date = newDate.getDate();
        const year = newDate.getFullYear();
        const weekDay = newDate.toLocaleString("en-us", {  weekday: "short" });
        const month = newDate.toLocaleString("en-us", { month: "short" });

        dateTimesArray.push({
            date: {date, weekDay, month, year},
            dateInDateFormat: dateTimes.date,
            times: dateTimes.times
        });

        
    });

    return dateTimesArray;






}





























