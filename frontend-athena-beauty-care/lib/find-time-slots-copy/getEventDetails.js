//
export const getEventDetails = event => {


    const eventDate = event.start.dateTime.substring(0, event.start.dateTime.indexOf("T"));

    const startIndexOfT = event.start.dateTime.indexOf("T");
    const endIndexOfT = event.end.dateTime.indexOf("T");

    const startTime = event.start.dateTime.substring(startIndexOfT + 1, startIndexOfT + 6);
    const endTime = event.end.dateTime.substring(endIndexOfT + 1, endIndexOfT + 6);

    const startingHour = Number(startTime.substring(0, 2));
    const endingHour = Number(endTime.substring(0, 2));

    const startingMinute = Number(startTime.substring(3, 5));
    const endingMinute = Number(endTime.substring(3, 5));

    const startTimeInMinute = startingHour * 60 + startingMinute;
    const endTimeInMinute = endingHour * 60 + endingMinute;;

    const eventDuration = endTimeInMinute - startTimeInMinute; 

    return {
        eventDate,
        startTime, 
        endTime, 
        startingHour, 
        endingHour, 
        startingMinute, 
        endingMinute, 
        startTimeInMinute, 
        endTimeInMinute, 
        eventDuration
    }
}