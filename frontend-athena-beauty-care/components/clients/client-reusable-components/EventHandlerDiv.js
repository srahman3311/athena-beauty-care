// Stylesheet
import styles from "../../../styles/client-ui/ClientGlobals.module.css";

export default function EventHandlerDiv({ content, clickEventHandler }) {


    return (
        <div className={styles.eventHandler_div} onClick = {clickEventHandler}>
            {content}
        </div>

    );


}