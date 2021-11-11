// Axios
import axios from "axios";


// Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.
export const fetchStylistsEvents = async (treatments) => {

    const stylistsEvents = [];
    
    for(let i = 0; i < treatments.length; i++) { 

        const endpoint = "http://localhost:7070/api/admins/fetch-events-by-mail";
    
        try {

            const response = await axios.post(endpoint, { email: treatments[i].email }, {withCredentials: true});

            stylistsEvents.push(response.data.events);

        } catch(err) {

            console.log(err.response.data.msg);
        }

    }
    
    return stylistsEvents;




}