// //
// import Link from "next/link"
import styles from "../../../styles/NavigationBar.module.css";



export default function NavigationText ({ windowWidth, text }) {

    return (
        <div className={styles.navigation_text} style = {{width: text === "Confirmation" && (windowWidth <= 600 ? "50px" : "100px")}}>
            <div className={styles.text} style = {{width: text === "Confirmation" && "100%"}}>
                <p className={styles.text_content} >{text}</p>
            </div>
            <div className={styles.text_blankDiv}></div>
        </div>
    );
        
    
}