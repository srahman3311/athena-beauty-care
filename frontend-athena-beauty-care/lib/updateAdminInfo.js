// Modules needed to update admin info
import axios from "axios";



export const updateAdminInfo = async () => {

    const email = localStorage.getItem("email");
    const authCode = localStorage.getItem("authCode");

    const endpoint = "http://localhost:7070/api/admins/update";

    try {

        const response = await axios.post(endpoint, { email, authCode }, {withCredentials: true});

        // remove the authorization code returned from the google oauth endpoint
        localStorage.removeItem("authCode");

        console.log(response.data.calendarAccessCode);
        
        // save refresh token in the local storage to use it to fetch events
        localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode)

        return response.data.refreshToken;
    }

    catch(error) {
        return console.log(error.response.data.msg)
    }

}



