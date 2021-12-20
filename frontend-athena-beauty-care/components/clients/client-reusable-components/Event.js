import Image from "next/image";

import styles from "../../../styles/Event.module.css";
import Logo from "../../../images/7.svg";

import Button from "../../reusable-components/Button";


function Event({ event }) {

    const { startTime } = event;

    const eventDate = new Date(startTime.substring(0, startTime.indexOf("T")));

    const eventStartTime = startTime.substring(startTime.indexOf("T") + 1, startTime.length);
    const date = eventDate.getDate();
    const weekDay = eventDate.toLocaleString("en-us", {  weekday: "long" });
    const month = eventDate.toLocaleString("en-us", { month: "long" });
    const year = eventDate.getFullYear();

   

    return (
        <div className={styles.event}>
            <div className={styles.event_image}>
                <Image
                    src={Logo} 
                    alt="Login Background Image" 
                />
            </div>
            
            <p className={styles.event_title}>{event.title}</p>
            <h2 className={styles.event_date}>{weekDay}, {month} {date}, {year}</h2>
            <h2 className={styles.event_time}>{eventStartTime}</h2>
            <div className={styles.button_div}>
                <Button text = {`Pay $${event.eventPrice}.00`} customClassName = "cancel_button" />
                <Button text = "Cancel" customClassName = "cancel_button" />
                <Button text = "Re-schedule" customClassName = "cancel_button" />
                <Button text = "Edit forms" customClassName = "cancel_button" />
            </div>
            <p className={styles.message_to_client}>Your appointment is confirmed, we can't wait to see you...</p>
            <p className={styles.message_to_client}>Make sure you read the confirmation email and don't miss out on any important information regarding your appointment</p>
            <div className={styles.button_div} >
                <Button text = "Register for an account" />
                <Button text = "Schedule another appointment" />
            </div>
        </div>
    );

}

export default Event;