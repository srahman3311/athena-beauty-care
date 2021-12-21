// Stylesheet
import styles from "../../styles/ErrorMessage.module.css";


function ServerErrorMessage({ serverErrorMessage }) {

    const messageStyle = {
        transform: serverErrorMessage ? "translate(-50%, 0%)" : "translate(-50%, 150%)"
    };

    return (
        <p 
            className={styles.serverError_message} 
            // style = {{display: serverErrorMessage ? "block" : "none", }}
            style = {messageStyle}
        >
            {serverErrorMessage}
        </p>
    );

}


export default ServerErrorMessage;