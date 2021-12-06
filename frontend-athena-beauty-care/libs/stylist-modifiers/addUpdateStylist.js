// Modules
import axios from "axios";


export const addUpdateStylist = async (stylistId, data, setValidationError, setSuccessFailMessage) => {


    const { firstName, lastName, email, password, password2 } = data.stylistInfo;
    const { addedWorkSchedules } = data;

    

    if(!firstName || !lastName || !email || !password || !password2) return setValidationError(true);

    if(password !== password2) return alert("Passwords didn't match");

    if(!addedWorkSchedules.length) return alert("Please add at least one work schedule");

    try {

        // Default endpoint is add event
        let endpoint = "http://localhost:7070/api/stylists/add-stylist";

        // But if stylistId is not empty then update request should be sent
        if (stylistId) endpoint = "http://localhost:7070/api/stylists/update"

        
        const response = await axios.post(endpoint, data);

        return alert(response.data.msg);

        setSuccessFailMessage(response.data.msg);


    } catch (error) {

        alert(error.response.data.msg);

        //setSuccessFailMessage(error.response.data.msg);

    }

}