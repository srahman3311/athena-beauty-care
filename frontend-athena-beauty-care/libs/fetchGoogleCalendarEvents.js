import axios from "axios";

async function fetchGoogleCalendarEvents(endpoint, username, setLoading, setEvents, setServerErrorMessage) {


    try {

        setLoading(true);

        const response = await axios.post(endpoint, { username }, {withCredentials: true});

        const data = response.data.map(item => {
            return {
                title: item.summary,
                end: new Date(item.end.dateTime),
                start: new Date(item.start.dateTime),
                allDay: false
            }
        });

        setEvents(data);

    } catch(error) {

        setServerErrorMessage(error.response.data);

    } finally {

        setLoading(false);

    }

}


export default fetchGoogleCalendarEvents;



