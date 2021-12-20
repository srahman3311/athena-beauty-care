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
import SideNav2 from "../../components/admins/common/SideNav2";
import Title from "../../components/admins/common/Title";

// Localizing the date time
const localizer = momentLocalizer(moment);



export default function CalendarEvents () {

    // Initializing next router
    const router = useRouter();

    const [eventInfo, setEventInfo] = useState({title: "", start: "", end: ""});
    const [events, setEvents] = useState([]);
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

        async function fetchEvents() {

            if(stylistHasAddedGoogleCalendar === "Yes") {

                const endpoint = "http://localhost:7070/api/stylists/fetch-google-events";

                const data = await fetchGoogleCalendarEvents(endpoint, stylistUsername);

                setEvents(data);
            }

        }

        fetchEvents();

        // If user is integrating google calendar then authCode will have a value. Use it to update the refreshToken 
        // field of the stylist to use it later to fetch her google calendar events
        if(localStorage.getItem("authCode")) { 

            async function updateToken() {

                const endpoint = "http://localhost:7070/api/stylists/update-token";

                const authCode = localStorage.getItem("authCode");

                // get the refreshToken by calling the updateStylistToken function
                const response = await updateUserToken(endpoint, stylistUsername, authCode);

                if(response === "success") {

                    localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");
                    
                    setHasGoogleCalendarAdded("Yes");

                    // As stylist is done integrating her google calendar remove authCode from localStorage
                    localStorage.removeItem("authCode");

                    // Finally feth her google calendar events to populate the calendar
                    fetchEvents();

                } else {
                    alert(response);
                }

            }

            updateToken();
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

        <div className={styles.calendar}>
            <Title />
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
        
    );
}