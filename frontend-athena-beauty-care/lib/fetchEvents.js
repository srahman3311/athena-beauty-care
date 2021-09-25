// Modules needed to fetch events
import axios from "axios";

export const fetchEvents = async (refreshToken) => {

    const endpoint = "http://localhost:7070/api/admins/fetch-events";

    try {

        const response = await axios.post(endpoint, { refreshToken }, {withCredentials: true});

        const data = response.data.events;

        const events = data.map(item => {
            return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
            }
        });

        return events;
    }

    catch(error) {
        return console.log(error.response.data.msg);
    }

}