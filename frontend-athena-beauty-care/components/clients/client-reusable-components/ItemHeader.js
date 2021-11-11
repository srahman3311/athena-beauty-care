// Stylesheet
import styles from "../../../styles/client-ui/ClientGlobals.module.css";



export default function ItemHeader({ content }) {

    return (
        <div className = {styles.item_header}>

            <h4 className = {styles.itemHeader_content}>{content}</h4>

        </div>
    );

}