import Image from "next/image";
// Stylesheet
import styles from "../../../styles/DateTime.module.css";

import Beautician from "../../../images/person-girl-flat.png"
import Beautician2 from "../../../images/Component 143 – 2.png"



export default function Times () {

    return (

        <div className={styles.times_container}>
            <div className={styles.times}>
                <div className={styles.time}>
                    <span style={{backgroundColor: "blue"}} className={styles.time_text}>13.30 PM</span>
                </div>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                
            </div>
            <div className={styles.times}>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                
            </div>
            <div className={styles.times}>
                <div className={styles.time}>
                    <span  className={styles.time_text}>13.30 PM</span>
                </div>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                
            </div>
            <div className={styles.times}>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                <div className={styles.time}>
                    <span className={styles.time_text}>13.30 PM</span>
                </div>
                
            </div>
        </div>
    );
}