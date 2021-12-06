// React Modules
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";

import useAxios from "../../../libs/useAxios";
import { times } from "../../../libs/event-modifiers/times";

// event-modifiers
import { eventInfoOnChange } from "../../../libs/event-modifiers/eventInfoOnChange";
import { addUpdateEvent } from "../../../libs/event-modifiers/addUpdateEvent";


// Components
import DropdownList from "../../reusable-components/DropdownList";
import SelectTime from "./SelectTime";
import CategoryList from "./CategoryList";
import TreatmentList from "./TreatmentList";
import LocationList from "./LocationList";
import Input from "../../reusable-components/Input";
// import SelectInput from "../../reusable-components/SelectInput";
import StylistList from "./StylistList";
import SaveButton from "../../reusable-components/SaveButton";
// import CloseFormButton from "../../reusable-components/CloseFormButton";

// Stylesheet
// import styles from "../../../styles/locations/AddLocation.module.css"
// import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";




export default function AddEvent ({ 
    treatmentInfo, setTreatmentInfo, isAddingUpdating, setIsAddingUpdating, displayHideTreatmentForm 
}) {

    const [successFailMessage, setSuccessFailMessage] = useState("");
    const [validationError, setValidationError] = useState(false);


    const [eventState, setEventState] = useState({
        locations: [],
        categories: [],
        treatments: [],
        stylists: []
    });

    const [eventInfo, setEventInfo] = useState({
        eventId: "",
        eventDate: null,
        // Set inital values of start and end time with the first item of times array. If user forgets to pick the times
        // then setting the initial values will make sure that an error message is shown to the user.  
        startTime: times[0],
        endTime: times[0],
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


        axios.get("http://localhost:7070/api/locations")
            .then(response => {
                setEventState(currentVal => {
                    return { ...currentVal, locations: response.data};
                })

                if(response.data.length) {

                    setEventInfo(currentVal => {
                        return {
                            ...currentVal, 
                            eventLocation: response.data[0].title
                        }
                    });
                }
            })
            .catch(error => alert(error.response.data.msg));

        


        // System will let user select category from the dropdown. So fetch all the categories and update the state
        axios.get("http://localhost:7070/api/categories")
            .then(response => {

                const newCategories = response.data;

                setEventState(currentVal => {
                    return {
                        ...currentVal,
                        categories: newCategories
                    };
                });

                // Fetch treatments based on category and stylists based on treatments. Intial values of treatment dropdown
                // will bebased on first category of the category dropdown. Initial values of stylist dropdown will be based 
                // on first treatment of the treatment dropdown.
                const endpoint = "http://localhost:7070/api/treatments/find-by-category"

                axios.post(endpoint, {category: newCategories[0].title})
                .then(newResponse => {

                    const newTreatments = newResponse.data.treatments;
                    const newStylists = newTreatments[0].stylists;

                    setEventState(currentVal => {
                        return {
                            ...currentVal,
                            treatments: newTreatments,
                            stylists: newStylists
                        };
                    });
                

                    // If user is okay with first category of the category dropdown and first treatment of the treatment 
                    // dropdown and first stylist of the stylist dropdown then he/she won't bother to change any of the 
                    // three. In that case update the eventInfo state with the first category, first treatment and first
                    // stylist and first treatment's duration
                    setEventInfo(currentVal => {
                        return {
                            ...currentVal, 
                            treatmentCategory: newCategories[0].title,
                            treatmentName: newTreatments[0].title,
                            stylist: newStylists[0],
                            eventDuration: newTreatments[0].duration
                        }
                    });

                })
                .catch(err => alert(err.response.data.msg))

            })
            .catch(err => alert(err.response.data.msg))
        
            
    }, []);




    function handleDropdownOnchange(event) {

        eventInfoOnChange(event, setEventInfo, eventState, setEventState);

    }
        

    return (

        // Styles are in globals.css
        <div className="add_event">

            <DatePicker selected={eventInfo.eventDate} onChange={date => eventInfoOnChange(date, setEventInfo)} />
            <SelectTime
                label = "Start Time"
                name = "startTime" 
                value = {eventInfo.startTime}
                times = {times}
                setEventInfo = {setEventInfo}
                eventInfoOnChange = {eventInfoOnChange}
            />

            {/* <DropdownList
                name = "treatmentCategory"
                nameKey = "title" 
            /> */}

            <CategoryList 
                eventState = {eventState}
                setEventState = {setEventState}
                eventInfo = {eventInfo}
                setEventInfo = {setEventInfo}
                eventInfoOnChange = {eventInfoOnChange}
            />

            <TreatmentList 
                eventState = {eventState}
                setEventState = {setEventState}
                eventInfo = {eventInfo}
                setEventInfo = {setEventInfo}
                eventInfoOnChange = {eventInfoOnChange}
            />

            <StylistList 
                eventState = {eventState}
                eventInfo = {eventInfo}
                setEventInfo = {setEventInfo}
                eventInfoOnChange = {eventInfoOnChange}
            />

            
            <LocationList 
                eventState = {eventState}
                eventInfo = {eventInfo}
                setEventInfo = {setEventInfo}
                eventInfoOnChange = {eventInfoOnChange}
            />  

            <Input 
                label = "Client Name"
                type = "text"
                name = "clientName"
                setData = {setEventInfo}
                value = {eventInfo.clientName}
                placeholder = "grace heart"
                onChange = {eventInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Client Email"
                type = "email"
                name = "clientEmail"
                setData = {setEventInfo}
                value = {eventInfo.clientEmail}
                placeholder = "grace.heart@abc.com"
                onChange = {eventInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Client Phone"
                type = "text"
                name = "clientPhone"
                setData = {setEventInfo}
                value = {eventInfo.clientPhone}
                placeholder = "+88 01717062884"
                onChange = {eventInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Event Description"
                type = "text"
                name = "eventDescription"
                setData = {setEventInfo}
                value = {eventInfo.eventDescription}
                placeholder = "anything"
                onChange = {eventInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Event Price"
                type = "number"
                name = "eventPrice"
                setData = {setEventInfo}
                value = {eventInfo.eventPrice}
                placeholder = ""
                onChange = {eventInfoOnChange}
                error = {validationError}
            />

           

           
           

            {/* <SuccessFailMessage 
                successFailMessage = {successFailMessage}
                setSuccessFailMessage = {setSuccessFailMessage}
            />

            
            <CloseFormButton 
                closeForm = {displayHideTreatmentForm} 
                setData = {setTreatmentInfo} 
                setIsAddingUpdating = {setIsAddingUpdating}
            /> */}
            <SaveButton
                // To pass to addUpdateLocation function. Empty string will make http request to backend at 
                // add_location endpoint, else update request will be made to backend 
                _id = {eventInfo.eventId} 
                data = {eventInfo} 
                setError = {setValidationError} 
                setSuccessFailMessage = {setSuccessFailMessage}
                addNewItem = {addUpdateEvent} 
            />
        </div>
    );
}