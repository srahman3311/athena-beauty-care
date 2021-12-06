// Stylesheet
import styles from "../../../styles/AdminList.module.css"




export default function Input ({ type, name, value, placeholder, onChange, validationErrors }) {

    const errorMessageStyles = {
        display: validationErrors.isEmpty && !value ? "block" : "none",
        color: "red",
        fontSize: "0.8rem"
    };


    return (

        <div className={styles.input}>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            <p style = {errorMessageStyles}>{placeholder.toLowerCase()} can't be blank</p>
        </div>
    );
}