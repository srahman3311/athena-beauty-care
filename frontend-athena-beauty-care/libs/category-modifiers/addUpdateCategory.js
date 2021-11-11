// Modules
import axios from "axios";


export const addUpdateCategory = async (categoryId, categoryInfo, setValidationError, setSuccessFailMessage) => {

    console.log(categoryId, categoryInfo);

    // Form validation
    if (!categoryInfo.title) return setValidationError(true);

    

    try {

        // Default endpoint is add location
        let endpoint = "http://localhost:7070/api/categories/add-category";

        // But if locationId is not empty then update request should be sent
        if (categoryId) endpoint = "http://localhost:7070/api/categories/update"

        
        const response = await axios.post(endpoint, categoryInfo);

        setSuccessFailMessage(response.data.msg);


    } catch (error) {

        setSuccessFailMessage(error.response.data.msg);

    }

}