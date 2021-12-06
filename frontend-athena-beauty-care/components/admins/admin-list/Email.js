// Children
import Input from "./Input";

// Stylesheet
import styles from "../../../styles/AdminList.module.css"





export default function BasicInfo ({ adminInfo, onChange, validationErrors }) {

    return (
        <div className={styles.email}>

            <div className={styles.email_label}>
                <h3>Email</h3>
            </div>

            <p style = {{display: validationErrors.isEmailInvalid ? "block" : "none", color: "red"}}>
                Invalid email address
            </p>
            <div className={styles.email_inputs}>
                <Input 
                    type = "email" 
                    name = "email" 
                    placeholder = "Email" 
                    value = {adminInfo.email} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
            </div>

        </div>
    );
}