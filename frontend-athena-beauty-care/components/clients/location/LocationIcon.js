// Stylesheet
import styles from "../../../styles/client-ui/Location.module.css";

export default function LocationIcon() {


    return (
        <div className={styles.location_icon}>
            <i style = {{color: "darkblue", fontSize: "24px"}} className="fas fa-map-marker-alt"></i>
        </div>
    );


}