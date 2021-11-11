// Axios
import axios from "axios";


// Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.
export const fetchStylistsEvents = async () => {


    try {
        const response = await axios.get("http://localhost:7070/api/events");

        return response.data.events;

    } catch (err) {

        console.log(err.response.data.msg);

    }

}