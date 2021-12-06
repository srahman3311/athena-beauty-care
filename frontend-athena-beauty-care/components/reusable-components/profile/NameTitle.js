// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";

const NameTitle = ({ name }) => {

    return (
        <div className={styles.name_title}>
            <h3>{name}</h3>
        </div>
    );
}



export default NameTitle;