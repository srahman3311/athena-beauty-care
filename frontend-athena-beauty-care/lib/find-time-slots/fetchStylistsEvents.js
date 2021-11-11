// Axios
import axios from "axios";


// Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.
export const fetchStylistsEvents = async (treatments) => {

    const treatmentWithEventLists = [];
    const temp = [];
    
    for(let i = 0; i < treatments.length; i++) { 

        const endpoint = "http://localhost:7070/api/admins/fetch-events-by-mail";


        if(treatments[i].stylist === "No preference") {

            for(let j = 0; j < treatments[i].stylists.length; j++) {

                try {
                    const response = await axios.post(endpoint, { email: treatments[i].stylists[j] }, {withCredentials: true});

                    temp.push(response.data.events);
    
                } catch (err) {
                    console.log(err.response.data.msg)
                }

            }

            treatmentWithEventLists.push({
                treatmentTitle: treatments[i].title,
                duration: treatments[i].duration,
                stylist: treatments[i].stylist,
                stylists: treatments[i].stylists,
                email: treatments[i].email,
                events: temp
            });

        } else {

            try {

                const response = await axios.post(endpoint, { email: treatments[i].email }, {withCredentials: true});
    
                treatmentWithEventLists.push({
                    treatmentTitle: treatments[i].title,
                    duration: treatments[i].duration,
                    stylist: treatments[i].stylist,
                    stylists: treatments[i].stylists,
                    email: treatments[i].email,
                    events: response.data.events
                });
    
            } catch(err) {
    
                console.log(err.response.data.msg);
            }

        }
    
       

    }
    
    return treatmentWithEventLists;




}