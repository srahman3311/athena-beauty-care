// Children
import ImageUploader from "./ImageUploader";
import BasicInfo from "./BasicInfo";
import Email from "./Email";
import PasswordInfo from "./PasswordInfo";
import WorkSchedule from "./work-schedule/WorkSchedule";

// Stylesheet
import styles from "../../../styles/AdminList.module.css"



export default function StylistAddForm ({ 
    validationErrors,
    addAdmin, 
    hideAddForm, 
    adminInfo, 
    onChange,
    file,
    filename,
    imgUrl,
    fileHandler,
    isUploading,
    addNewAdmin 
}) {

    return (

        <div className={styles.admin_add_form} style = {{display: addAdmin ? "flex" : "none"}}>

            <div className={styles.profile_picture}>
                <ImageUploader 
                    file = {file} 
                    filename = {filename} 
                    fileHandler = {fileHandler} 
                    imgUrl = {imgUrl} 
                    isUploading = {isUploading} 
                />
            </div>

            <div className={styles.user_info}>
                <div className={styles.user_info_container}>
                    <BasicInfo 
                        adminInfo = {adminInfo} 
                        onChange = {onChange} 
                        validationErrors = {validationErrors} 
                    />
                    <Email 
                        adminInfo = {adminInfo} 
                        onChange = {onChange} 
                        validationErrors = {validationErrors} 
                    />
                    <PasswordInfo 
                        adminInfo = {adminInfo} 
                        onChange = {onChange} 
                        validationErrors = {validationErrors}
                    />
                    <div className={styles.buttons}>
                        <button onClick = {hideAddForm}>Cancel</button>
                        <button onClick = {addNewAdmin}>Save</button>
                    </div>
                    
                </div> 
            </div>

            <WorkSchedule />
        </div>
    );
}