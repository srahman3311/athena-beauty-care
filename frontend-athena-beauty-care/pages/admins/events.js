// event-modifiers
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
import logoImage from "../../images/carton-woman.jpg";

// components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import SearchInput from "../../components/reusable-components/SearchInput";
import AddEvent from "../../components/admins/events/AddEvent";
import DataTable from "../../components/reusable-components/data-table/DataTable";
import EventDetails from "../../components/admins/events/EventDetails";
import Message from "../../components/reusable-components/Message";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import NextPrevView from "../../components/reusable-components/NextPrevView";






export default function Events () {


    const [happening, setHappening] = useState("Fetching");
    const [eventState, setEventState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    });

    // Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/events";
    const requestBody = { searchText: eventState.searchText, skip: eventState.skip, limit: eventState.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody, happening);
    const { 
        data: locationData, 
        error: locationDataFetchingError, 
        loading: locationDataFetchingLoading 
    } = useAxios("get", "http://localhost:7070/api/locations", {}, happening);
    const { 
        data: categoryData, 
        error: categoryDataFetchingError, 
        loading: categoryDataFetchingLoading 
    } = useAxios("get", "http://localhost:7070/api/categories", {}, happening);
    const { 
        data: treatmentData, 
        error: treatmentDataFetchingError, 
        loading: treatmentDataFetchingLoading 
    } = useAxios("get", "http://localhost:7070/api/treatments", {}, happening);
   
    const [locations, setLocations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [treatments, setTreatments] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventTableData, setEventTableData] = useState([]);
    const [actionMessage, setActionMessage] = useState(null);
    const [validationError, setValidationError] = useState(false);
    const [eventId, setEventId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);

    const [eventInfo, setEventInfo] = useState({
        eventId: "",
        eventDate: null, 
        startTime: "",
        endTime: "",
        treatmentCategory: "",
        treatmentName: "",
        stylist: "",
        stylistEmail: "",
        eventLocation: "",
        eventDuration: 0,
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        eventDescription: "",
        eventPrice: ""
    });
    

    
    
  

    useEffect(() => {


        setHappening("fetching");

        if(data !== null) {

            setEvents(data);

            const newData = [];

            data.forEach((event, index) => {
                newData.push({
                    id: index + 1,
                    data: [
                        event.eventLocation, 
                        event.treatmentCategory, 
                        event.treatmentName, 
                        event.stylist,
                        event.startTime.substring(0, event.startTime.indexOf("T")),
                        event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length),
                        event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length),
                        event.clientEmail,
                        event.status,
                        `View Details-${event._id.toString()}`
                    ]

                });

            });

            setEventTableData(newData);


            setEventState(currentValue => {
                return {
                    ...currentValue,
                    dataLength: totalDataCount
                };
            });

        }

        if(locationData !== null) setLocations(locationData);
        if(categoryData !== null) setCategories(categoryData);
        if(treatmentData !== null) setTreatments(treatmentData);

    }, [data, locationData, categoryData, treatmentData, happening]);


   
   

    async function addUpdateEvent(event) {

        event.preventDefault();

        const { eventDate, eventLocation, treatmentCategory, treatmentName, stylist, startTime, clientEmail } = eventInfo;

        if(!eventDate) return alert("Please pick a date");
        if(!eventLocation) return alert("Please select a location");
        if(!treatmentCategory) return alert("Please select a category");
        if(!treatmentName) return alert("Please select a treatment");
        if(!stylist) return alert("Please select a stylist");
        if(!startTime) return alert("please select a start time");
        if(!clientEmail) return setValidationError(true);

        try {

            setActionMessage("Saving");

            // Default endpoint is add event
            let endpoint = "http://localhost:7070/api/events/add-event";
    
            // But if eventId is not empty then update request should be sent
            if (eventId) endpoint = "http://localhost:7070/api/events/update"
    
            
            const response = await axios.post(endpoint, eventInfo);

            setActionMessage(response.data.msg);
    
    
        } catch (error) {
    
            setActionMessage(error.response.data.msg);
    
        } finally {
            
            setHappening("refetching afer adding")
        }
    
        
    }

    function fetchNextPrevItems(event) {

        const newSkip = Number(event.target.value);

        setEventState(currentValue => {

            return {
                ...currentValue,
                skip: newSkip
            };
        });

        setHappening("refetching after next button clicked");

    }

  

    
    return (
        <div className="events" style = {{display: "flex", position: "relative", height: "100vh", overflow: "hidden"}}>
            <ControlPanel />
            <div className="content" style = {{width: "100%"}}>
            
                <AddEvent
                    isAddingUpdating = {isAddingUpdating} 
                    setIsAddingUpdating = {setIsAddingUpdating}
                    eventInfo = {eventInfo}
                    setEventInfo = {setEventInfo}
                    locations = {locations}
                    categories = {categories}
                    treatments = {treatments}
                    addUpdateEvent = {addUpdateEvent}
                    validationError = {validationError}
                />

              
                <div className="search_add">
                    <SearchInput
                        value = {eventState.searchText}
                        setState = {setEventState}
                        setHappening = {setHappening}
                    />

                    <button onClick = {() => setIsAddingUpdating(true)}>Add event</button>
                </div>

                <DataTable
                    tableHeaders = {eventsDataTableHeaders} 
                    tableData = {eventTableData} 
                    tableFor = "events"
                    setItemId = {setEventId}
                />

                <EventDetails
                    events = {events}
                    eventId = {eventId} 
                    setEventId = {setEventId}
                    setHappening = {setHappening}
                    setActionMessage = {setActionMessage}
                />

                <NextPrevItems 
                    state = {eventState} 
                    setState = {setEventState} 
                    fetchNextPrevItems = {fetchNextPrevItems}
                />
                <NextPrevView state = {eventState} />
            </div>

            <Message 
                message = {actionMessage} 
                setActionMessage = {setActionMessage}
            />
        
        </div>
    );
}