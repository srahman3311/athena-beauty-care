// Modules
import axios from "axios";


export const deleteCategory = async (_id, state, setState) => {

    const { searchText, skip, limit } = state;


    try {

        const endpoint = "http://localhost:7070/api/categories/delete";
        
        const response = await axios.post(endpoint, { _id, searchText, skip, limit });

        setState(currentVal => {
            return {
                ...currentVal,
                categories: response.data.categories,
                dataLength: response.data.dataLength
            }
        });


    } catch (error) {

        alert("Something went wrong");

    }

}