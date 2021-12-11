// Stylesheet
import styles from "../../../styles/DateTime.module.css";




export default function DateCard ({ date,  activeDate, setActiveDate, choosenTime }) {

    

    return (

        <div 
            className={styles.dateCard_container}
            
        >

            <div
                onClick={event => setActiveDate(event.target.textContent)} 
                className={styles.dateHidden_div}
            >
                {date.date}-{date.month.toLowerCase()}
            </div>

            <div 
                className={styles.date_card} 
                style ={{
                    backgroundImage: activeDate === `${date.date}-${date.month.toLowerCase()}` 
                    ? 
                    "linear-gradient(to left, green, rgba(0, 0, 139, 0.4))"
                    :
                    choosenTime === `${date.date}-${date.month.toLowerCase()}` && 
                    "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
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