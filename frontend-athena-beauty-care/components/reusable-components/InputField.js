// Stylesheet
import styles from "../../styles/InputField.module.css";

// Components
import Label from "./Label";
import ValidationErrorMessage from "./ValidationErrorMessage";



function InputField ({ labelText, type, name, value, placeholder, validationError, validationErrorMessageFor, handleChange }) {


    return (
        <div className={styles.input_field}>
            <Label labelText = {labelText} />
            <input
                type = {type} 
                name = {name} 
                placeholder = {placeholder} 
                value = {value} 
                onChange = {handleChange} 
            />
            <ValidationErrorMessage
                value = {value}
                validationError = {validationError} 
                validationErrorMessageFor = {validationErrorMessageFor} 
            />
        </div>
    );
}

export default InputField;