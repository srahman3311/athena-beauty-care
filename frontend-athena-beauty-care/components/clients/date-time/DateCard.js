// Stylesheet
import styles from "../../../styles/DateTime.module.css";




export default function DateCard ({ date }) {

    return (

        <div className={styles.dateCard_container}>
            <div 
                className={styles.date_card} 
                style ={{
                    backgroundImage: date.weekDay === "Today" && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                }}
            >
                <p className={styles.weekDay_text}>{date.weekDay}</p>
                <p className={styles.date_text}>{date.date}</p>
                <p className={styles.month_text}>{date.month}</p>

                <span 
                    className={styles.clockIcon_container} 
                    style = {{border: date.weekDay === "Today" && "1px solid blue"}}
                >
                    <i style = {{color: date.weekDay === "Today" && "blue"}} className="far fa-clock"></i>
                </span>
            </div>
           
            
            
        </div>

    );
}