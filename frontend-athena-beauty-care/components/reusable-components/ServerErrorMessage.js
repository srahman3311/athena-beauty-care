// Stylesheet
import styles from "../../styles/ErrorMessage.module.css";


function ServerErrorMessage({ serverErrorMessage }) {

    return (
        <p 
            className={styles.serverError_message} 
            style = {{display: serverErrorMessage ? "block" : "none", }}
        >
            {serverErrorMessage}
        </p>
    );

}


export default ServerErrorMessage;