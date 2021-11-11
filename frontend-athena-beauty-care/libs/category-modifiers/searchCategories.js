// Modules
import axios from "axios";

export const searchCategories = async (searchText, state, setState) => {

    let { skip, limit } = state;



    try {

        const endpoint = "http://localhost:7070/api/categories";
        
        const response = await axios.post(endpoint, { searchText, skip, limit });

        const { categories, dataLength } = response.data;

        setState(currentValue => {
            return {
                ...currentValue,
                categories,
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