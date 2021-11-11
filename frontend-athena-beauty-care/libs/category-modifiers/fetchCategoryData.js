// Modules
import axios from "axios";

export const fetchCategoryData = async (state, newSkip, setState) => {

    let { searchText, limit } = state;



    try {

        const endpoint = "http://localhost:7070/api/categories";
        
        const response = await axios.post(endpoint, { searchText, skip: newSkip, limit });

        const { categories, dataLength } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                categories,
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