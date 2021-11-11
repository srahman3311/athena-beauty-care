// Components
import ErrorMessage from "./ErrorMessage"

// Stylesheet
import styles from "../../styles/common-styles/CommonStyles.module.css"




export default function Input ({ label, type, name, value, placeholder, onChange, setData, error }) {


    return (
        <div className={styles.input}>

            <p className = {styles.input_label}>{label}</p>
            
            <input
                // style = {{width: (name === "address1" || name === "address2" || name === "title") && "350px" }} 
                type = {type} 
                name = {name} 
                placeholder = {placeholder} 
                value = {value} 
                onChange = {event => onChange(event, setData)} 
            />

            <ErrorMessage
                error = {error}
                name = {name}
                value = {value}
                content = {`${label} can't be blank`} 
            />
            
        </div>
    );
}