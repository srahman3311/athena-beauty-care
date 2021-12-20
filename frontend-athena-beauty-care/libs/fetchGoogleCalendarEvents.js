import axios from "axios";

async function fetchGoogleCalendarEvents(endpoint, username) {

    try {

        const response = await axios.post(endpoint, { username }, {withCredentials: true});

        const data = response.data.map(item => {
            return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
            }
        });

        return data;

    } catch(error) {

        alert("Something went wrong");

    }

}


export default fetchGoogleCalendarEvents;