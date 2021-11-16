// Axios
import axios from "axios";


// Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.
export const getStylists = async (newTreatments) => {


    try {
        const response = await axios.get("http://localhost:7070/api/stylists");

        const stylists = [];

        newTreatments.forEach(treatment => {

            response.data.stylists.forEach(stylist => {

                const stylistFullName = stylist.firstName + " " + stylist.lastName;

                if(treatment.choosenStylist === stylistFullName) stylists.push(stylist);


            });
        });

        return stylists;

    } catch (err) {

        console.log(err.response.data.msg);

    }

}