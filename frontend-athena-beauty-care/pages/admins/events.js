// event-modifiers
import { fetchEventData } from "../../libs/event-modifiers/fetchEventData";


// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
import styles from "../../styles/Login.module.css";

// React Modules
import { useEffect, useState } from "react";
import axios from "axios";



//Images
import loginBgImage from "../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
import logoImage from "../../images/127089417-face-expression-of-woman-with-blond-hair-smiling-beautiful-cartoon-character-modern-business-woman-v.jpg";

// components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import EventList from "../../components/admins/events/EventList";
import AddEvent from "../../components/admins/events/AddEvent";
import EventsTableHeader from "../../components/admins/events/events-table/EventsTableHeader";
import EventsTableData from "../../components/admins/events/events-table/EventsTableData";





export default function Events () {



    const [treatmentId, setTreatmentId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [eventState, setEventState] = useState({
        events: [],
        locations: [],
        categories: [],
        treatments: [],
        stylists: [],
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    });
    // const [eventInfo, setEventInfo] = useState({
    //     eventId: "",
    //     eventDate: null,
    //     // Set inital values of start and end time with the first item of times array. If user forgets to pick the times
    //     // then setting the initial values will make sure that an error message is shown to the user.  
    //     startTime: times[0],
    //     endTime: times[0],
    //     treatmentCategory: "",
    //     treatmentName: "",
    //     stylist: "",
    //     stylistEmail: "",
    //     eventLocation: "",
    //     eventDuration: 0,
    //     clientName: "",
    //     clientEmail: "",
    //     clientPhone: "",
    //     eventDescription: "",
    //     eventPrice: ""
    // });



    useEffect(() => {

        fetchEventData(eventState, eventState.skip, setEventState);

    }, []);


    console.log(eventState);
 

    
    return (
        <div className="" style={{display: "flex"}}>
            <ControlPanel />
            <AddEvent />

            {/* <div className="search_add">
                <SearchInput
                    state = {state}
                    setState = {setState}
                    searchData = {searchTreatments} 
                />
                <DisplayFormButton
                    text = "Add Event" 
                    displayHideForm = {displayHideTreatmentForm}
                    setIsAddingUpdating = {setIsAddingUpdating} 
                />
            </div> */}


            {/* <div className="data-table">
                <table>
                    <EventsTableHeader />
                    <EventsTableData 
                        events = {eventState.events}
                        // setItemId = {setTreatmentId}
                        // isAddingUpdating = {isAddingUpdating}
                        // state = {state} 
                        // setState = {setState}
                        // deleteItem = {deleteTreatment}
                    />
                </table>
            </div> */}

        </div>
    );
}