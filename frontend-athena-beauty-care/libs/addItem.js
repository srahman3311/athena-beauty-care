// Modules
import axios from "axios";


export const addItem = async (endpoint, itemInfo) => {

    try {


        const response = await axios.post(endpoint, locationInfo);

        return response;

       

    } catch (error) {

        return error;

    } 
    // finally {

    // } 

}