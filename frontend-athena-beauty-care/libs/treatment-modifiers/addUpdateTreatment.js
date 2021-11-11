// Modules
import axios from "axios";


export const addUpdateTreatment = async (treatmentId, treatmentInfo, setValidationError, setSuccessFailMessage) => {


    // return console.log(treatmentInfo)
    const { title, description, duration, price, stylists } = treatmentInfo

    // Form validation
    if(!title || !description || !duration || !price) return setValidationError(true);

    
    if(!stylists.length) return alert("Please associate at least one stylist with this treatment");

    

    try {

        // Default endpoint is add location
        let endpoint = "http://localhost:7070/api/treatments/add-treatment";

        // But if locationId is not empty then update request should be sent
        if (treatmentId) endpoint = "http://localhost:7070/api/treatments/update"

        
        const response = await axios.post(endpoint, treatmentInfo);

        setSuccessFailMessage(response.data.msg);


    } catch (error) {

        setSuccessFailMessage(error.response.data.msg);

    }

}