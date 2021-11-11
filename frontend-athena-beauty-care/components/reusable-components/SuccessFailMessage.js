// Stylesheet
import styles from "../../styles/common-styles/CommonStyles.module.css";

export default function SuccessFailMessage ({ successFailMessage, setSuccessFailMessage }) {




    return (
        <div className={styles.successFail_message} style = {{display: successFailMessage ? "flex" : "none"}}>
            <p>{successFailMessage}</p>
            <button onClick = {() => setSuccessFailMessage("")}>X</button>
        </div>
    );


}