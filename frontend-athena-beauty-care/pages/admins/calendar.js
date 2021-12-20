// Next Modules
import { useRouter } from "next/router"; // For Redirecting 

// React & Other Modules
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

// Auth Middleware
import { CheckAuth } from "../../auth/CheckAuth";

// libraries
import { fetchEvents } from "../../lib/fetchEvents";
import { updateAdminInfo } from "../../lib/updateAdminInfo";
import { findTimeSlots } from "../../lib/find-time-slots/findTimeSlots";

// Stylesheets
import styles from "../../styles/Calendar.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // React Big Calendar

// Components
import SideNav from "../../components/admins/common/SideNav";
import Title from "../../components/admins/common/Title";

// Localizing the date time
const localizer = momentLocalizer(moment);



export default function CalendarEvents () {

    // Initializing next router
    const router = useRouter();

    const [eventInfo, setEventInfo] = useState({title: "", start: "", end: ""});
    const [events, setEvents] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [calendarAccessCode, setCalendarAccessCode] = useState("");

    useEffect(async () => {

        // if user is not logged in redirect to login page
        if(!CheckAuth()) return router.push("/admins/login");

        // setCalendarAccessCode(localStorage.getItem("calendarAccessCode"));

        // if there is authCode in the local storage that means admin is integrating his/her google calendar. In this case
        // admin info must be updated by calling the google oauth token endpoint
        if(localStorage.getItem("authCode") !== null) { // if something doesn't exist in the local storage that means it is null.

            // get the refreshToken by calling the updateAdminInfo function
            const newRefreshToken = await updateAdminInfo();

            await localStorage.setItem("calendarAccessCode", newRefreshToken);

            // fetch events now
            const data = await fetchEvents(newRefreshToken);

            // update the events state
            await setEvents(data);

            // just to relaunch the calendar component so that calendar icon at sidenav dissappears
            return setCalendarAccessCode(localStorage.getItem("calendarAccessCode"));
        }

        const calendarAccessCode = await localStorage.getItem("calendarAccessCode");
        // if the user has logged in for the first time so he/she is yet to integrate his/her gooogle calendar,
        // which means refreshToken of this user is just empty string. So there will be no calendar events to show 
        if(calendarAccessCode === "" || calendarAccessCode === "undefined") {
            console.log("refresh token is empty string");
            return setEvents([]);
        }

        //if user has already integrated his/her google calendar then fetch all the events and update the events state
        const data = await fetchEvents(calendarAccessCode);
        return setEvents(data);
       
    }, [calendarAccessCode]);

    function fetchUserSpecificEvents (event) {

        if(event.target.value === "select User") return;

        return alert(event.target.value);
    }


    function handleSelect ({ start, end }) {
        const title = window.prompt("Title");
        const newEvent = {title, start, end, allDay: false};

        setEvents(currentVal => {
            return [
                ...currentVal,
                newEvent
            ];
        });

    }

    function displayEvent (event) {

        console.log(event, typeof event.start);

        const start = `${event.start.getHours().toString()}:${event.start.getMinutes().toString()}`

        setEventInfo(currentVal => {
            return {
                ...currentVal,
                title: event.title,
                start,
                end: event.end.getHours().toString()
            };
        });
        setDisplayModal(true);
    }

    
    
    
 
    return (

        <div className={styles.calendar}>
            <Title />
            <button onClick={findTimeSlots}>find time slots</button>
            <div className={styles.calendar_content}>
                <SideNav calendarAccessCode = {calendarAccessCode} />
                <div className={styles.big_calendar}>
                    <div className={styles.big_calendar_header}>
                        <h2>Calendar</h2>
                        <select name="beautician" onChange = {fetchUserSpecificEvents}>
                            <option value="select User">Select User</option>
                            <option value="athena">Athena</option>
                            <option value="Michelle">Michelle</option>
                            <option value="Nicole">Nicole</option>
                        </select>
                    </div>
                    <Calendar
                        selectable // Needed for creating event, otherwise slots can't be selected
                        localizer={localizer}
                        defaultView="week"
                        events={events}
                        timeslots={6}
                        step={10}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectSlot={handleSelect}
                        onSelectEvent={displayEvent}
                        style={{ width: "100%", height: "95%" }}
                    />
                </div>
            </div>


            <div className={styles.modal} style={{display: displayModal ? "block" : "none"}}>
                
                <div className={styles.modal_content}>
                    <div className={styles.event_time}>
                        <span>{eventInfo.start}</span>
                        <span>-----</span>
                        <span>{eventInfo.end}</span>
                    </div>
                    <div className={styles.event_content}>
                        <p>{eventInfo.title}</p>
                        <p>20 Minutes</p>
                        <p>First time</p>
                        <p>location 1</p>
                    </div>
                    <button className={styles.close_modal} onClick = {() => setDisplayModal(false)}>
                        hide
                    </button>
                </div>

            </div>
        </div>
        
    );
}