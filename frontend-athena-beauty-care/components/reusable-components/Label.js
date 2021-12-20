// Stylesheet
import styles from "../../styles/InputField.module.css"


function Label ({ labelText }) {

    return (
       <label className={styles.input_field_label}>{labelText}</label>
    );
}


export default Label;