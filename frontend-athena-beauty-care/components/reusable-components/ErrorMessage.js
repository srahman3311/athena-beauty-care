// Stylesheet
import styles from "../../styles/common-styles/CommonStyles.module.css"


export default function ErrorMessage({ error, name, value, content }) {

    const condition = error && !value && name !== "remarks" && name !== "clientName" && name !== "clientPhone" && name !== "eventDescription"

    // treatment has remarks property which is not a mandatory field. So if user doesn't want to add a remark we should be
    // okay with this and won't show validation error message
    return (
        <p 
            className={styles.error_message} 
            style = {{display: condition ? "block" : "none"}}
        >
            * {content}
        </p>  
    );
}