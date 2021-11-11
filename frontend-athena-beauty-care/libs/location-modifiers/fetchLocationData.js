// Modules
import axios from "axios";

export const fetchLocationData = async (state, newSkip, setState) => {

    let { searchText, limit } = state;

    // if(typeof newLimit !== "undefined") limit = newLimit;


    try {

        const endpoint = "http://localhost:7070/api/locations";
        
        const response = await axios.post(endpoint, { searchText, skip: newSkip, limit });

        const { locations, dataLength } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                locations,
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