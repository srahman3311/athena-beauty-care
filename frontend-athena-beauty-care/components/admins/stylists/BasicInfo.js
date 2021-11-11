// Children
import Input from "./Input";

// Stylesheet
import styles from "../../../styles/AdminList.module.css"





export default function BasicInfo ({ adminInfo, onChange, validationErrors }) {

    return (
        <div className={styles.basic_info}>
            <div className={styles.basic_info_label}>
                <h3>General Info</h3>
            </div>
            <div className={styles.basic_info_inputs}>
                <Input 
                    type = "text" 
                    name = "firstName" 
                    placeholder = "First Name" 
                    value = {adminInfo.firstName} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
                <Input 
                    type = "text" 
                    name = "lastName" 
                    placeholder = "Last Name" 
                    value = {adminInfo.lastName} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
                <Input 
                    type = "text" 
                    name = "username" 
                    placeholder = "Username" 
                    value = {adminInfo.username} 
                    onChange = {onChange} 
                    validationErrors = {validationErrors}
                />
            </div>
        </div>
    );
}