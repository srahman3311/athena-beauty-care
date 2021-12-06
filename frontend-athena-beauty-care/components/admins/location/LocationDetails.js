// Stylesheet
import styles from "../../../styles/Events.module.css";


const LocationDetails = ({ locations, locationId, setLocationId, openAddLocationModal }) => {

    return (
        <>
            {locations.map((location, index) => {
                return (
                    <div
                        key = {location._id.toString()}
                        className = {styles.eventDetails_modal} 
                        style = {{display: locationId === location._id.toString() ? "block" : "none"}}
                    >
                        <p>{location.title}</p>
                        <button onClick = {() => setLocationId("")}>Close</button>
                        {/* <button value = {location._id.toString()} onClick = {openAddLocationModal}>Update</button> */}
                        <button value = {index} onClick = {openAddLocationModal}>Update</button>
                    </div>
                );
            })}
           
        </>
    );
}


export default LocationDetails;