// Modules needed to fetch events
import axios from "axios";
import { fetchStylistsEvents } from "./fetchStylistsEvents";
import { findBusyTimes } from "./findBusyTimes";
import { getDates } from "./getDates";
import { getEventDetails } from "./getEventDetails";
import { getStylists } from "./getStylists";
import { getStylistsAllWorkingTimes } from "./helper-functions/getStylistsAllWorkingTimes";

const defaultTime = [
    "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", 
    "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", 
    "16:00", "16:15", "16:30", "16:45", "17:00"
]

export const findTimeSlots = async () => {


    const newTreatments = [
        {
            category: "Brows",
            choosenStylist: "Nicole Gorgeous",
            location: "Athena Beauty Care - Gulshan",
            treatmentDuration: 35,
            treatmentPrice: 23,
            treatmentTitle: "Shaping brows"
        },
        {
            category: "Plasma Ion",
            choosenStylist: "Andrea Gorgeous",
            location: "Athena Beauty Care - Gulshan",
            treatmentDuration: 70,
            treatmentPrice: 42,
            treatmentTitle: "Plasma Ion with light facials"
        },
        {
            category: "Permanent Makeup",
            choosenStylist: "Soudi Gorgeous",
            location: "Athena Beauty Care - Gulshan",
            treatmentDuration: 85,
            treatmentPrice: 45,
            treatmentTitle: "Permanent Makeup with light massage"
        }
    ];


    const location = newTreatments[0].location;
    const datesArray = await getDates();
    const allStylists = await getStylists(newTreatments);
    // Fetching calendar events of all stylists
    const calendarEvents = await fetchStylistsEvents();

    const stylistsByName = [];

    newTreatments.forEach(treatment => {
        stylistsByName.push(treatment.choosenStylist);
    });





    // console.log(datesArray);
    // console.log(allStylists);
    console.log(calendarEvents);



    // calendarEvents.forEach(calendarEvent => {
    //     console.log(new Date(calendarEvent.startTime), new Date(calendarEvent.endTime));
    // });



    // Steps

    // 1. dateTimeArray contains the dates of 30 days from today. 


    const stylistsWorkingTimesOnAvailableDates = [];
    // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.
    datesArray.forEach(date => {

        const newDate = new Date(date);

        // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name
        const dayName = newDate.toLocaleDateString("en-US", { weekday: "long" });


        const temp = [];

        // Loot through all stylists to be able to loop through their workSchedule 
        allStylists.forEach(stylist => {

            // Loop through the each stylist's workSchedule and see if they are all available on dayName
            stylist.workSchedule.forEach(schedule => {

                if(schedule.location === location && schedule.day === dayName) {

                    const workingTimes = getStylistsAllWorkingTimes(schedule.startTime, schedule.endTime);

                    temp.push({ stylist: stylist.firstName + " " + stylist.lastName, workingTimes});
                }
            });
            
        });


        if(temp.length === newTreatments.length) stylistsWorkingTimesOnAvailableDates.push({ date, stylistWorkingTimes: temp});

    });

    return console.log(stylistsWorkingTimesOnAvailableDates);



    filteredDates.forEach(newDateTime => {

        stylistsByName.forEach(stylistName => {

            

            calendarEvents.forEach(event => {

                const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));

                if(stylistName === event.stylist && newDateTime.date === eventDate && location === event.eventLocation) {

                    console.log(event);
                }


            });


        });
    });

    return;



    


    // const stylistsWithBusyTimes = [];

    // filteredDates.forEach(dateTime => {

        
    //     calendarEvents.forEach(event => {

    //         const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));

    //         if(dateTime.date !== eventDate) return;

    //         if(event.eventLocation !== location) return;

    //         if(!stylistsByName.includes(event.stylist)) return;


    //         const eventStartTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
    //         const eventEndTime = event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length);



        


    //     });

    // });
















































    const stylistsWithFreeTimes = [];
    
    calendarEvents.forEach((calendarEvent, calendarEventIndex) => {

        if(calendarEvent.stylist !== "No preference") {

            const newDateTimeArray = [];

            dateTimeArray.forEach((dateTime, dateTimeIndex) => {

                let busyTimes = [];
                let freeTimes = [];


                for(let i = 0; i < calendarEvent.events.length; i++) {

                    const event = calendarEvent.events[i];

                    let { eventDate, startTime, startingHour, startingMinute, eventDuration } = getEventDetails(event);


                    if(dateTime.date === eventDate) {

                        busyTimes.push(startTime);
            
                        for(let j = 1; j < Math.ceil(eventDuration / 15); j++) {

                            let interval = (15 * j) + startingMinute;
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

                if(!busyTimes.length) {
                    dateTime.defaultTime.forEach(time => {
                        freeTimes.push(time);
                    })
                } else {
                    dateTime.defaultTime.forEach(time => {

                        if(!busyTimes.includes(time)) {
                            freeTimes.push(time);
                        }
                    });
                }

                newDateTimeArray.push({date: dateTime.date, freeTimes});
            });

            stylistsWithFreeTimes.push({
                event: calendarEvent.treatmentTitle,
                stylist: calendarEvent.stylist, 
                email: calendarEvent.email,
                duration: calendarEvent.duration,
                freeTimesArray: newDateTimeArray
            });

        } 

        else {

           
            const newArray = [];

            for(let i = 0; i < calendarEvent.events.length; i++) {

                const newDateTimeArray = [];
                

                dateTimeArray.forEach(async (dateTime, dateTimeIndex) => {

                    let busyTimes = [];
                    let freeTimes = [];

                    for(let j = 0; j < calendarEvent.events[i].length; j++) {

                        const event = calendarEvent.events[i][j];

                        let { eventDate, startTime, startingHour, startingMinute, eventDuration } = await getEventDetails(event);

                        if(dateTime.date === eventDate) {

                            busyTimes.push(startTime);
    
                            for(let k = 1; k < Math.ceil(eventDuration / 15); k++) {
    
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

                    if(!busyTimes.length) {
                        dateTime.defaultTime.forEach(time => {
                            freeTimes.push(time);
                        })
                    } else {
                        dateTime.defaultTime.forEach(time => {
    
                            if(!busyTimes.includes(time)) {
                                freeTimes.push(time);
                            }
                        });
                    }
    
                    newDateTimeArray.push({date: dateTime.date, freeTimes});

                });

                newArray.push({
                    email: calendarEvent.stylists[i],
                    freeTimesArray: newDateTimeArray
                });

            }

            stylistsWithFreeTimes.push({
                event: calendarEvent.treatmentTitle,
                stylist: calendarEvent.stylist, 
                duration: calendarEvent.duration,
                newArray: newArray
            });

            
        }

    });

    
    console.log(stylistsWithFreeTimes);


    let abcd = 0;
    treatments.forEach(item => {

        if(item.stylist !== "No preference") abcd += (Math.ceil(item.duration / 15));
    });

    

    // Starting times from which all stylists are available one after the other
    const availableStartingTimesWithDates = [];

    dateTimeArray.forEach((dateTime, index) => {

        // This array will be populated with all the starting free times of each date starting from today up to 30 days
        const availableTimesByDate = [];
        

        for(let i = 0; i < dateTime.defaultTime.length - abcd; i++) {

            // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
            // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
            // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
            // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
            let totalTimeCount = 0;

            // This is a temporary array which will be populated with free times of each stylist by looping through the 
            // stylistsWithFreeTimes array
            const temp = [];

            for(let j = 0; j < stylistsWithFreeTimes.length; j++) {

                const item = stylistsWithFreeTimes[j];
                

                if(item.stylist !== "No preference") {

                    // Count will determine how many free times should be looked for. For example if count is 3 and starting
                    // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for
                    const count = Math.ceil(item.duration / 15); 
                    
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
                        startingTime = dateTime.defaultTime[i];
                    } else {
                        // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
                        // the next time after the time of last item of temp array. 
                        const y = dateTime.defaultTime.indexOf(temp[temp.length - 1]);
                        startingTime = dateTime.defaultTime[y + 1];
                    }

                    //
                    let hour = Number(startingTime.substring(0, 2)); // 9
                    let minutes = Number(startingTime.substring(3, 5)); // 00
        
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

                        const freeTimes = item.freeTimesArray[index].freeTimes;
        
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
            }
    
            if(totalTimeCount === temp.length) availableTimesByDate.push(dateTime.defaultTime[i]);

        }

        availableStartingTimesWithDates.push({date: dateTime.date, times: availableTimesByDate});

    });


    console.log(availableStartingTimesWithDates);
    

   

    

   





}  

  









    




    

   