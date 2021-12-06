// Modules
import axios from "axios";

export const fetchEventData = async (eventState, newSkip, setEventState) => {

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

        

    } catch (error) {

        // setSuccessFailMessage(error.response.data.msg);
        console.log(error.response.data.msg)

    }

}