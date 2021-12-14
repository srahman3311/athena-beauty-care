// Stylesheet
import styles from "../../../styles/DateTime.module.css";




export default function DateCard ({ dateTime,  selectedDate, setSelectedDate, selectedTime }) {

    console.log(selectedTime);

    return (

        <div 
            className={styles.dateCard_container}
            
        >

            <div
                onClick={event => setSelectedDate(event.target.textContent)} 
                className={styles.dateHidden_div}
            >
                {dateTime.dateInDateFormat}
            </div>

            <div 
                className={styles.date_card} 
                style ={{
                    backgroundImage: selectedDate === dateTime.dateInDateFormat 
                    ? 
                    "linear-gradient(to left, green, rgba(0, 0, 139, 0.4))"
                    :
                    selectedTime.includes(dateTime.dateInDateFormat) &&
                    "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                }}
            >
                <p className={styles.weekDay_text}>{dateTime.date.weekDay}</p>
                <p className={styles.date_text}>{dateTime.date.date}</p>
                <p className={styles.month_text}>{dateTime.date.month}</p>

                <span 
                    className={styles.clockIcon_container} 
                    style = {{border: dateTime.date.weekDay === "Today" && "1px solid blue"}}
                >
                    <i style = {{color: dateTime.date.weekDay === "Today" && "blue"}} className="far fa-clock"></i>
                </span>
            </div>
           
            
            
        </div>

    );
}