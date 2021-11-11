// Modules
import axios from "axios";


export const addUpdateLocation = async (locationId, locationInfo, setValidationError, setSuccessFailMessage) => {


    // Form validation
    if (
        !locationInfo.title || 
        !locationInfo.address1 ||
        !locationInfo.address2 ||
        !locationInfo.city ||
        !locationInfo.country ||
        !locationInfo.phone || 
        !locationInfo.zipCode
    ) return setValidationError(true);

    

    try {

        // Default endpoint is add location
        let endpoint = "http://localhost:7070/api/locations/add-location";

        // But if locationId is not empty then update request should be sent
        if (locationId) endpoint = "http://localhost:7070/api/locations/update"

        
        const response = await axios.post(endpoint, locationInfo);

        setSuccessFailMessage(response.data.msg);


    } catch (error) {

        setSuccessFailMessage(error.response.data.msg);

    }

}