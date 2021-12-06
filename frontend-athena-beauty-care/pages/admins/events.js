// event-modifiers
import { fetchEventData } from "../../libs/event-modifiers/fetchEventData";
import { eventsDataTableHeaders } from "../../libs/data";
import useAxios from "../../libs/useAxios";


// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
import styles from "../../styles/Events.module.css";

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
import DataTable from "../../components/reusable-components/data-table/DataTable";
import EventDetails from "../../components/admins/events/EventDetails";
import EventsTableHeader from "../../components/admins/events/events-table/EventsTableHeader";
import EventsTableData from "../../components/admins/events/events-table/EventsTableData";





export default function Events () {


    

    const [treatmentId, setTreatmentId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [eventTableData, setEventTableData] = useState([]);
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
  

    useEffect(() => {

        fetchEventData(eventState, eventState.skip, setEventState, setEventTableData);
       

    }, []);

 

    
    return (
        <div className="" style = {{display: "flex", position: "relative", height: "100vh"}}>
            <ControlPanel />
            <AddEvent />

            {/* <div className="search_add">
                <SearchInput
                    state = {state}
                    setState = {setEventState}
                    searchData = {searchTreatments} 
                />
                <DisplayFormButton
                    text = "Add Event" 
                    displayHideForm = {displayHideEventForm}
                    setIsAddingUpdating = {setIsAddingUpdating} 
                />
            </div> */}

            {/* <button>Add Event</button> */}

            <DataTable
                tableHeaders = {eventsDataTableHeaders} 
                tableData = {eventTableData} 
                tableFor = "events"
                setItemId = {setTreatmentId}
            />

            <EventDetails
                events = {eventState.events}
                treatmentId = {treatmentId} 
                setTreatmentId = {setTreatmentId}
            />

            
         


        
        </div>
    );
}