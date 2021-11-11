// Modules
import axios from "axios";


export const deleteLocation = async (_id, state, setState) => {

    const { searchText, skip, limit } = state;


    try {

        const endpoint = "http://localhost:7070/api/locations/delete";
        
        const response = await axios.post(endpoint, { _id, searchText, skip, limit });

        setState(currentVal => {
            return {
                ...currentVal,
                locations: response.data.locations,
                dataLength: response.data.dataLength
            }
        });


    } catch (error) {

        alert("Something went wrong");

    }

}