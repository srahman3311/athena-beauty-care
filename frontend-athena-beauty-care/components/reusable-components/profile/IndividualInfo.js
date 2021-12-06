// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";



export default function IndividualInfo ({ infoTitle, info }) {

    return (
        <div className = {styles.individual_info}>

            <h4 className = {styles.info_title}>{infoTitle}</h4>
            <p className = {styles.info}>{info}</p>

        </div>
    );

}