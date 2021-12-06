// Modules
import axios from "axios";

export const fetchTreatmentData = async (state, newSkip, setState) => {

    let { searchText, limit } = state;


    try {

        const endpoint = "http://localhost:7070/api/treatments";
        
        const response = await axios.post(endpoint, { searchText, skip: newSkip, limit });

        console.log(response.data);

        const { treatments, dataLength } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                treatments,
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