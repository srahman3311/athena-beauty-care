// Modules needed to update admin info
import axios from "axios";
import fetchGoogleCalendarEvents from "./fetchGoogleCalendarEvents";

const updateUserToken = async (
    username, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage, routerPathname
) => {

    const authCode = localStorage.getItem("authCode");
    
    try {

        setLoading(true);

        const response = await axios.post(tokenEndpoint, { username, authCode }, {withCredentials: true});

        localStorage.removeItem("authCode");
        if(routerPathname === "/admins/calendar") localStorage.setItem("adminHasAddedGoogleCalendar", "Yes");
        if(routerPathname === "/stylists/calendar") localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");

        fetchGoogleCalendarEvents(eventEndpoint, username, setLoading, setEvents, setServerErrorMessage);
    }
    catch(error) {

        localStorage.removeItem("authCode");

        setServerErrorMessage(error.response.data);
        alert(error.response.data);

    } finally {

        setLoading(false);

    }

}

export default updateUserToken;











