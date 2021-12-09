// Modules
import axios from "axios";


export const addUpdateEvent = async (eventId, eventInfo, setValidationError, setSuccessFailMessage) => {


    const { eventDate, startTime, endTime, clientEmail, eventPrice } = eventInfo

    if(!eventDate) return alert("Please select a date");

    // Client email and event price must also be provided. Otherwise return with an error message
    if(!clientEmail || !eventPrice) return setValidationError(true);

    // if eventPrice is minus figure then
    if(Number(eventPrice) <= 0) return alert("Price can't be equal to or less than 0");


    try {

        // Default endpoint is add event
        let endpoint = "http://localhost:7070/api/events/add-event";

        // But if eventId is not empty then update request should be sent
        if (eventId) endpoint = "http://localhost:7070/api/events/update"

        
        const response = await axios.post(endpoint, eventInfo);

        return alert(response.data.msg);

        setSuccessFailMessage(response.data.msg);


    } catch (error) {

        alert(error.response.data.msg);

        //setSuccessFailMessage(error.response.data.msg);

    }

}