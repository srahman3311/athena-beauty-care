// Stylesheet
import styles from "../../../styles/Login.module.css";




export default function LoginInput ({ label, type, name, placeholder, value, handleChange, validationErrors }) {

    const errorStyle = {
        color: "#cc7351",
        display: validationErrors.isEmpty && !value ? "block" : "none",
        letterSpacing: "1px",
        marginTop: "0",
        fontSize: "12px"
    };

    return (
        <div className={styles.input}>
            <p className={styles.label}>{label}</p>
            <input 
                type = {type} 
                name = {name} 
                value = {value} 
                placeholder = {placeholder} 
                onChange = {handleChange} 
            />
            <p style = {errorStyle}> {name} cannot be blank</p>
        </div>
    )
}
