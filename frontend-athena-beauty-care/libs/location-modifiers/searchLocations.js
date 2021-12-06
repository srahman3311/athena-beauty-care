// Modules
import axios from "axios";

export const searchLocations = async (searchText, state, setState) => {

    let { skip, limit } = state;






    // if(typeof newLimit !== "undefined") limit = newLimit;


    try {

        const endpoint = "http://localhost:7070/api/locations";
        
        const response = await axios.post(endpoint, { searchText, skip, limit });

        const { items, totalItemCount } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                locations: items,
                searchText,
                limit,
                dataLength: totalItemCount
            }
        });

        

    } catch (error) {

        // setSuccessFailMessage(error.response.data.msg);
        console.log(error.response.data.msg)

    }

}