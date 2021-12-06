// Modules
import axios from "axios";

export const fetchEventData = async (eventState, newSkip, setEventState, setEventTableData) => {

    let { searchText, limit } = eventState;


    try {

        const endpoint = "http://localhost:7070/api/events";
        
        const response = await axios.post(endpoint, { searchText, skip: newSkip, limit });

        const { events, dataLength } = response.data;

        setEventState(currentValue => {
            return {
                ...currentValue,
                events,
                skip: newSkip,
                limit,
                dataLength
            }
        });

        
        const newData = [];

       
        events.forEach((event, index) => {
            newData.push({
                id: index + 1,
                data: [
                    event.eventLocation, 
                    event.treatmentCategory, 
                    event.treatmentName, 
                    event.stylist,
                    event.startTime.substring(0, event.startTime.indexOf("T")),
                    event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length),
                    event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length),
                    event.clientEmail,
                    `View Details-${event._id.toString()}`,
                    `Delete-${event._id.toString()}`
                ]
            });
        });

        setEventTableData(newData);
        

    } catch (error) {

        // setSuccessFailMessage(error.response.data.msg);
        console.log(error.response.data.msg)

    }

}