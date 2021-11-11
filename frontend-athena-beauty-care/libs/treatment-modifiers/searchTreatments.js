// Modules
import axios from "axios";



export const searchTreatments = async (searchText, state, setState) => {

    let { skip, limit } = state;


    try {

        const endpoint = "http://localhost:7070/api/treatments";
        
        const response = await axios.post(endpoint, { searchText, skip, limit });

        const { treatments, dataLength } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                treatments,
                searchText,
                limit,
                dataLength
            }
        });

        

    } catch (error) {

        // setSuccessFailMessage(error.response.data.msg);
        console.log(error.response.data.msg)

    }

}