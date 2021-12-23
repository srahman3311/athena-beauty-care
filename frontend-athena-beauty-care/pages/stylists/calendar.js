// Next Modules
import { useRouter } from "next/router"; // For Redirecting 
import fetchGoogleCalendarEvents from "../../libs/fetchGoogleCalendarEvents";
import updateUserToken from "../../libs/updateUserToken";


// React & Other Modules
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

// Auth Middleware
import { CheckAuth } from "../../auth/CheckAuth";

// libraries
// import { fetchEvents } from "../../lib/fetchEvents";
// import { updateAdminInfo } from "../../lib/updateAdminInfo";

// Stylesheets
import styles from "../../styles/Calendar.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // React Big Calendar

// Components
import Layout from "../../components/layout/Layout";
import SideNav2 from "../../components/admins/common/SideNav2";
import Title from "../../components/admins/common/Title";

// Localizing the date time
const localizer = momentLocalizer(moment);



export default function CalendarEvents () {

    // Initializing next router
    const router = useRouter();

    const [eventInfo, setEventInfo] = useState({title: "", start: "", end: ""});
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [displayModal, setDisplayModal] = useState(false);
    

    // It will be used inside SideNav component to show or not show the integrate google calendar icon/button.
    // Default value set to No
    const [hasGoogleCalendarAdded, setHasGoogleCalendarAdded] = useState("No");

    useEffect(() => {

        // if user is not logged in redirect to login page
        if(!CheckAuth()) return router.push("/stylists/login");

        const stylistUsername = localStorage.getItem("stylistUsername");
        const stylistHasAddedGoogleCalendar = localStorage.getItem("stylistHasAddedGoogleCalendar");

        // Update the hasGoogleCalendarAdded state with the value from localStorage. 
        setHasGoogleCalendarAdded(stylistHasAddedGoogleCalendar);

        const eventEndpoint = "http://localhost:7070/api/stylists/fetch-google-events";
        const tokenEndpoint = "http://localhost:7070/api/stylists/update-token";

        // If user has already added his/her google calendar then fetch the google events and return once done fetching
          if(stylistHasAddedGoogleCalendar === "Yes") {
            fetchGoogleCalendarEvents(eventEndpoint, stylistUsername, setLoading, setEvents, setServerErrorMessage);
            return;
        } 

        // If user is trying to integrate his/her google calendar then call updateUserToken function. If everything
        // goes ok then updateUserToken will call fetchGoogleCalendarEvents from there and fetch user's google events
        if(localStorage.getItem("authCode")) { 
            updateUserToken(stylistUsername, tokenEndpoint, eventEndpoint, setLoading, setEvents, setServerErrorMessage);
            return;
        }

    }, [router.isReady])

   
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

        <Layout>
            <div className={styles.calendar}>
                {/* <Title /> */}
                <div className={styles.calendar_content}>
                    <SideNav2
                        authorizedRedirectUri= "http://localhost:3000/stylists/auth" 
                        hasGoogleCalendarAdded = {hasGoogleCalendarAdded} 
                    />
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


                {/* <div className={styles.modal} style={{display: displayModal ? "block" : "none"}}>
                    
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

                </div> */}
            </div>
        </Layout>
        
    );
}