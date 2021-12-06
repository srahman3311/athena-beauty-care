// Stylesheet
import styles from "../../../styles/Events.module.css";


const EventDetails = ({ events, treatmentId, setTreatmentId }) => {

    return (
        <>
            {events.map(event => {
                return (
                    <div
                        key = {event._id.toString()}
                        className = {styles.eventDetails_modal} 
                        style = {{display: treatmentId === event._id.toString() ? "block" : "none"}}
                    >
                        <p>{event.treatmentName}</p>
                        <button onClick = {() => setTreatmentId("")}>Close</button>
                    </div>
                );
            })}
        </>
    );
}

export default EventDetails;