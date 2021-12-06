// React Modules
import { useEffect, useState } from "react";
import useAxios from "../../../libs/useAxios";
import { addWorkSchedule } from "../../../libs/stylist-modifiers/addWorkSchedule";
import { removeWorkSchedule } from "../../../libs/stylist-modifiers/removeWorkSchedule";
import { addUpdateStylist } from "../../../libs/stylist-modifiers/addUpdateStylist";
import { times, daysOfTheWeek } from "../../../libs/data";

// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";

// Children
import DropdownList from "../../reusable-components/DropdownList";
import Input from "../../reusable-components/Input";
import SaveButton from "../../reusable-components/SaveButton";


function AddStylist ({ showModal, setShowModal, stylistInfo, setStylistInfo }) {

    
    const { data: locationData, error, loading} = useAxios("get", "http://localhost:7070/api/locations", {});
    const [locations, setLocations] = useState([]);
    const [validationError, setValidationError] = useState(false);
    const [successFailMessage, setSuccessFailMessage] = useState("");
    const [workScheduleState, setWorkScheduleState] = useState({
        location: "",
        day: "",
        startTime: "",
        endTime: ""
    });
    const [addedWorkSchedules, setAddedWorkSchedules] = useState([]);

    
    function handleChange(event, setStylistInfo) {
        const { name, value } = event.target;

        setStylistInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            };
        });
    }

    function handleDropdownOnchange (event) {
        const { name, value } = event.target;

        setWorkScheduleState(currentValue => {
            return {
                ...currentValue,
                [name]: value
            };
        });
    }
    

    useEffect(() => {
        
        if(locationData !== null) setLocations(locationData);

    }, [locationData])


    return (

        <div className={styles.add_stylist} style = {{display: showModal ? "block" : "none", width: "100%", height: "100%"}}>
            <button onClick = {() => setShowModal(false)}>Cancel</button>

            <div className="stylists_content">
                <div className="stylist_info">
                    <Input
                        type = "text"
                        label = "First Name"
                        name = "firstName"
                        value = {stylistInfo.firstName}
                        placeholder = "Athena"
                        onChange = {handleChange}
                        setData = {setStylistInfo}
                        error = {validationError}
                    />
                    <Input
                        type = "text"
                        label = "Last Name"
                        name = "lastName"
                        value = {stylistInfo.lastName}
                        placeholder = "Gorgeous"
                        onChange = {handleChange}
                        setData = {setStylistInfo}
                        error = {validationError}
                    />
                    <Input
                        type = "email"
                        label = "Email"
                        name = "email"
                        value = {stylistInfo.email}
                        placeholder = "athena@gmail.com"
                        onChange = {handleChange}
                        setData = {setStylistInfo}
                        error = {validationError}
                    />

                    <Input
                        type = "password"
                        label = "Password"
                        name = "password"
                        value = {stylistInfo.password}
                        placeholder = ""
                        onChange = {handleChange}
                        setData = {setStylistInfo}
                        error = {validationError}
                    />
                    <Input
                        type = "password"
                        label = "Retype Password"
                        name = "password2"
                        value = {stylistInfo.password2}
                        placeholder = ""
                        onChange = {handleChange}
                        setData = {setStylistInfo}
                        error = {validationError}
                    />

                </div>
                <div className={styles.work_schedule}>
                
                    <DropdownList 
                        name = "location"
                        nameKey = "title"
                        blankOptionValue = "Select location"
                        data = {locations}
                        handleDropdownOnchange = {handleDropdownOnchange}
                    />
                    <DropdownList
                        name = "day"
                        nameKey = "name"
                        blankOptionValue = "Select day"
                        data = {daysOfTheWeek}
                        handleDropdownOnchange = {handleDropdownOnchange}
                    />
                    <DropdownList
                        name = "startTime"
                        nameKey = "time"
                        blankOptionValue = "Select start time"
                        data = {times}
                        handleDropdownOnchange = {handleDropdownOnchange}
                    />
                    <DropdownList
                        name = "endTime"
                        nameKey = "time"
                        blankOptionValue = "Select end time"
                        data = {times}
                        handleDropdownOnchange = {handleDropdownOnchange}
                    />
                    <button 
                        onClick = {() => addWorkSchedule(workScheduleState, setAddedWorkSchedules, addedWorkSchedules)}
                    >
                        Add
                    </button>
                </div>
                <div className="workSchedule_list" >
                    {addedWorkSchedules.map((schedule, index) => {
                        return (
                            <div className="" key = {index + 1} style = {{display: "flex", justifyContent: "space-between"}}>
                                <p>{schedule.location}</p>
                                <p>{schedule.day}</p>
                                <p>{schedule.startTime}</p>
                                <p>{schedule.endTime}</p>
                                <button 
                                    value = {schedule.day} 
                                    onClick = {event => removeWorkSchedule(event, addedWorkSchedules, setAddedWorkSchedules)}
                                >
                                    Remove
                                </button>
                            </div>
                            
                        );
                    })}
                </div>
            </div>
            <SaveButton 
                id = "1" 
                data = {{stylistInfo, addedWorkSchedules}}
                addNewItem = {addUpdateStylist}
                setError = {setValidationError}
                setSuccessFailMessage = {setSuccessFailMessage}
            />
        </div>
    );
}


export default AddStylist;