import axios from "axios";
// Stylesheet
import styles from "../../../styles/Events.module.css";


const EventDetails = ({ events, eventId, setEventId, setActionMessage, setHappening }) => {

    async function cancelEvent(event) {

        const _id = event.target.value;


        setEventId("");
        try {

            setActionMessage("Cancelling");

            const response = await axios.post("http://localhost:7070/api/events/cancel-event", { _id });

            setActionMessage(response.data);

        } catch(error) {

            setActionMessage(error.response.data);

        } finally {

            setHappening("re-fetching");
        }

        
    }


    return (
        <>
            {events.map((event, index) => {
                return (
                    <div
                        key = {event._id.toString()}
                        className = {styles.eventDetails_modal} 
                        style = {{display: eventId === event._id.toString() ? "block" : "none"}}
                    >
                        <p>{event.treatmentName}</p>
                        <button onClick = {() => setEventId("")}>Close</button>
                        <button
                            style = {{display: event.status === "Active" ? "inline" : "none"}} 
                            value = {event._id.toString()} 
                            onClick = {cancelEvent}
                        >
                            Cancel
                        </button>
                    </div>
                );
            })}
        </>
    );
}

export default EventDetails;