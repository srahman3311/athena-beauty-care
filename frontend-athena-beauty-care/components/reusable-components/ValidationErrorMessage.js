// Stylesheet
import styles from "../../styles/ErrorMessage.module.css"


function ValidationErrorMessage({ value, validationError, validationErrorMessageFor }) {

    
    return (
        <p 
            className={styles.validation_error_message} 
            style = {{display: validationError && !value ? "block" : "none"}}
        >
            {validationErrorMessageFor} can't be blank
        </p>  
    );
}


export default ValidationErrorMessage;