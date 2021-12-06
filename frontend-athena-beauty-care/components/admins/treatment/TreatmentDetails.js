// Stylesheet
import styles from "../../../styles/Events.module.css";



// 
const TreatmentDetails = ({ treatments, treatmentId, setTreatmentId, openAddTreatmentModal }) => {

    return (
        <>
            {treatments.map((treatment, index) => {
                return (
                    <div
                        key = {treatment._id.toString()}
                        className = {styles.eventDetails_modal} 
                        style = {{display: treatmentId === treatment._id.toString() ? "block" : "none"}}
                    >
                        <p>{treatment.title}</p>
                        
                        <div className="abcd">
                            {treatment.stylists.map(stylist => {
                                return (
                                    <p key = {stylist}>{stylist}</p>
                                );
                            })}
                        </div>
                       
                        <button onClick = {() => setTreatmentId("")}>Close</button>
                        <button value = {index} onClick = {openAddTreatmentModal}>Update</button>
                    </div>
                );
            })}
           
        </>
    );
}


export default TreatmentDetails;