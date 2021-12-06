// Children
import Input from "./Input";

// Stylesheet
import styles from "../../../styles/AdminList.module.css"



export default function PasswordInfo ({ adminInfo, onChange, validationErrors }) {

    // const passwordMatchErrorStyles = {
    //     display: !validationErrors.isPasswordInvalid ? "block" : "none",
    //     color: "red",
    //     fontSize: "0.8rem"
    // };

    return (
        <div className={styles.password}>
            
            <div className={styles.password_label}>
                <h3>Password</h3>
            </div>

            <p style = {{display: !validationErrors.isMatch ? "block" : "none"}}>
                passwords didn't match
            </p>
            <p style = {{display: validationErrors.isPasswordInvalid ? "block" : "none", color: "red"}}>
                password must contain at least a number, an uppercase and lowercase letter and a special character.
            </p>
            
            <div className={styles.password_inputs}>
                <Input 
                    type = "password" 
                    name = "password" 
                    placeholder = "Password" 
                    value = {adminInfo.password} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
                <Input 
                    type = "password" 
                    name = "password2" 
                    placeholder = "Confirmation Password" 
                    value = {adminInfo.password2} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
            </div>

        </div>
    );
}