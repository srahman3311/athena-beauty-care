// React Modules
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";

import useAxios from "../../../libs/useAxios";
import { times } from "../../../libs/data";

// event-modifiers
// import { handleChange } from "../../../libs/event-modifiers/handleChange";
// import { addUpdateEvent } from "../../../libs/event-modifiers/addUpdateEvent";


// Components
import DropdownList from "../../reusable-components/DropdownList";

import Input from "../../reusable-components/Input";


import SaveButton from "../../reusable-components/SaveButton";
// import CloseFormButton from "../../reusable-components/CloseFormButton";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"
// import styles from "../../../styles/locations/AddLocation.module.css"
// import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";




export default function AddEvent ({
    locations,
    categories,
    treatments, 
    eventInfo, 
    setEventInfo, 
    isAddingUpdating, 
    setIsAddingUpdating, 
    validationError,
    addUpdateEvent 
}) {


    const [newTreatments, setNewTreatments] = useState(null);
    const [stylists, setStylists] = useState(null);

   

    function dateOnChange(date) {

        return setEventInfo(currentVal => {
            return {
                ...currentVal,
                eventDate: date
            };
        });
        

    }

    function handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        // If user is selecting/unselecting a category
        if(name === "treatmentCategory") {

            // If user is unselecting the category
            if(!value) {
                // After selecting the category user might also have selected a treatment and a stylist. If user has 
                // selected a treatment then values of eventDuration and eventPrice have also been updated with
                // duration and price info of the treatment. So they all must be blank again now. 
                setEventInfo(currentVal => {
                    return {
                        ...currentVal,
                        treatmentCategory: value,
                        treatmentName: "",
                        stylist: "",
                        eventDuration: 0,
                        eventPrice: 0
                    };
                });

                // Hide the treatment and stylist list after user's unselecting the category 
                setNewTreatments(null);
                return setStylists(null);

            } 

            // if user is selecting a category then filter the treatments list with the category value 
            const filteredTreatments = treatments.filter(treatment => treatment.category === value);

            // And update the new treatment list with the values that match with the user's selected category
            setNewTreatments(filteredTreatments);

            // Finally update the eventState with the category value
            return setEventInfo(currentVal => {
                return {
                    ...currentVal,
                    treatmentCategory: value
                };
            });

        }

        // If user is selecting/unselecting a treatment
        if(name === "treatmentName") {

            // if user is unselecting a treatment
            if(!value) {

                // After selecting the treatment user might also have selected a stylist. And after selecting the treatment
                // eventState's eventDuration and eventPrice were also updated with the values of the selected treatment's
                // duration and price. So they all must be blank again now. 
                setEventInfo(currentVal => {
                    return {
                        ...currentVal,
                        treatmentName: value,
                        eventDuration: 0,
                        eventPrice: 0,
                        stylist: ""
                    };
                });

                // Hide the stylist list after user's unselecting the treatment
                return setStylists(null);

            }

            // If user is selecting a treatment

            // Find the treatment from the initially fetched master treatment list. We need to update the stylists,
            // eventDuration and eventPrice with the values of stylists, duration and price of the found treatment
            for(let x = 0; x < treatments.length; x++) {

                if(treatments[x].title === value) {

                    // DropdownList's map function loops through an array of objects. But found treatment's stylist
                    // list is an array of strings. So we need to create a new array of objects to feed the DropdownList
                    const newStylists = [];

                    treatments[x].stylists.forEach(stylist => {
                        newStylists.push({ id: stylist, stylist });
                    });
                   
                    // Now update the stylist list with the newly created array of objects
                    setStylists(newStylists);

                    // After that update eventInfo state with the values of selected treatment and selected treatment's
                    // duration and price info
                    setEventInfo(currentVal => {
                        return {
                            ...currentVal,
                            treatmentName: value,
                            eventDuration: treatments[x].duration,
                            eventPrice: treatments[x].price
                        };
                    });

                    // We are done, break the loop
                    break;
                }
            }

        }


        // If name is not treatmentCategory or treatmentName then update the state with name value pairs
        setEventInfo(currentVal => {
            return {
                ...currentVal,
                [name]: value
            };
        });

    }
        

    return (

        // Styles are in globals.css
        <form className="add_location" method="post" style = {{ display: isAddingUpdating ? "block" : "none"}}>
            
            <label>Pick a date</label>
            <DatePicker selected = {eventInfo.eventDate} onChange={dateOnChange} />

            {/* styles are in globals.css */}
            <div className="dropdown_input">
                <label>Select a location</label>
                <DropdownList 
                    name = "eventLocation"
                    nameKey = "title"
                    blankOptionValue = "Choose location"
                    data = {locations}
                    handleDropdownOnchange = {handleChange}
                />
            </div>

            <div className="dropdown_input">
                <label>Select a Category</label>
                <DropdownList 
                    name = "treatmentCategory"
                    nameKey = "title"
                    blankOptionValue = "Choose category"
                    data = {categories}
                    handleDropdownOnchange = {handleChange}
                />
            </div>
            {
                newTreatments && 
                <div className="dropdown_input">
                    <label>Select treatment</label>
                    <DropdownList 
                        name = "treatmentName"
                        nameKey = "title"
                        blankOptionValue = "Choose treatment"
                        data = {newTreatments} 
                        handleDropdownOnchange = {handleChange}
                    />
                </div>
            }

            {
                stylists &&
                <div className="dropdown_input">
                    <label>Select stylist</label>
                    <DropdownList 
                        name = "stylist"
                        nameKey = "stylist"
                        blankOptionValue = "Choose stylist"
                        data = {stylists} 
                        handleDropdownOnchange = {handleChange}
                    />
                </div>
            }

            <div className="dropdown_input">
                <label>Select the start time</label>
                <DropdownList 
                    name = "startTime"
                    nameKey = "time"
                    blankOptionValue = "Choose start time"
                    data = {times}
                    handleDropdownOnchange = {handleChange}
                />
            </div>

            <Input 
                label = "Client Name"
                type = "text"
                name = "clientName"
                setData = {setEventInfo}
                value = {eventInfo.clientName}
                placeholder = "grace heart"
                onChange = {handleChange}
                error = {validationError}
            />

            <Input 
                label = "Client Email"
                type = "email"
                name = "clientEmail"
                setData = {setEventInfo}
                value = {eventInfo.clientEmail}
                placeholder = "grace.heart@abc.com"
                onChange = {handleChange}
                error = {validationError}
            />

            <Input 
                label = "Client Phone"
                type = "text"
                name = "clientPhone"
                setData = {setEventInfo}
                value = {eventInfo.clientPhone}
                placeholder = "+88 01717062884"
                onChange = {handleChange}
                error = {validationError}
            />

            <Input 
                label = "Event Description"
                type = "text"
                name = "eventDescription"
                setData = {setEventInfo}
                value = {eventInfo.eventDescription}
                placeholder = "anything"
                onChange = {handleChange}
                error = {validationError}
            />

            <button onClick = {event => {
                event.preventDefault();
                setIsAddingUpdating(false)}
            }
            >
                Close
            </button>
            <button value = {eventInfo.eventId} onClick = {addUpdateEvent}>Save</button>

           
           

            {/* <SuccessFailMessage 
                successFailMessage = {successFailMessage}
                setSuccessFailMessage = {setSuccessFailMessage}
            />

            
            <CloseFormButton 
                closeForm = {displayHideTreatmentForm} 
                setData = {setTreatmentInfo} 
                setIsAddingUpdating = {setIsAddingUpdating}
            /> */}
            {/* <SaveButton
                // To pass to addUpdateLocation function. Empty string will make http request to backend at 
                // add_location endpoint, else update request will be made to backend 
                _id = {eventInfo.eventId} 
                data = {eventInfo} 
                setError = {setValidationError} 
                setSuccessFailMessage = {setSuccessFailMessage}
                addNewItem = {addUpdateEvent} 
            /> */}
        </form>
    );
}