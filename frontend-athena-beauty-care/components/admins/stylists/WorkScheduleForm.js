import { useEffect, useState } from "react";
import { times, daysOfTheWeek } from "../../../libs/data";
import useAxios from "../../../libs/useAxios";

// Components
import DropdownList from "../../reusable-components/DropdownList";

// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";




function WorkScheduleForm({ workSchedules, setWorkSchedules }) {

    const { data } = useAxios("get", "http://localhost:7070/api/locations", {});
    const [locations, setLocations] = useState([]);
    const [workScheduleState, setWorkScheduleState] = useState({
        location: "",
        day: "",
        startTime: "",
        endTime: ""
    });


    useEffect(() => {
        
        if(data !== null) setLocations(data);

    }, [data])



    function handleWorkScheduleOnChange (event) {

        event.preventDefault();
        
        const { name, value } = event.target;

        setWorkScheduleState(currentValue => {
            return {
                ...currentValue,
                [name]: value
            };
        });
    }


    function addWorkSchedule(event) {

        event.preventDefault();

        const { location, day, startTime, endTime } = workScheduleState;

        // 1. User must select a location, day, start time and end time. Otherwise display an error message
        if(!location) return alert("Please select a location");
        if(!day) return alert("Please select a day");
        if(!startTime) return alert("Please select a start time");
        if(!endTime) return alert("Please select an end time");
        
        
    
        // 2. Now check to see if user has already added a work schedule with the same day(example - Monday)
        let dayName = "";

        const len = workSchedules.length;
    
        for(let i = 0; i < len; i++) {
    
            if(workScheduleState.day === workSchedules[i].day) {
    
                dayName = workScheduleState.day;
                
                break;
            }
    
        }
    
        if(dayName) return alert(`You have already added ${workScheduleState.day} to a schedule`);


    
        // 3. Now check to see if user has mistakenly selected the same time for both start and end time
        if(workScheduleState.startTime === workScheduleState.endTime) return alert("start and end time can't be same");
    

        // 4. Start hour can't be greater than end hour. For example - user might have selected 11:00 as start time 
        // and 10:00 as end time. Or, if start hour and end hour are same then it must be checked that end minute is 
        // greater than start minute, for example - user might have selected 11:00 as start time and 11:30 as end time. 
        // Though start and end hour are same, end minute(30) is greater then start minute(00)

        // Separating start hour and minute
        const startHour = workScheduleState.startTime.substring(0, 2);
        const startMinute = workScheduleState.startTime.substring(3, 5);
    
        // Separating end hour and minute
        const endHour = workScheduleState.endTime.substring(0, 2);
        const endMinute = workScheduleState.endTime.substring(3, 5);
    
        // As said above start hour can't be greater then end hour. If start and end hour are same end minute must be 
        // greater than start minute. Otherwise display an error message 
        if(startHour > endHour || (startHour === endHour && endMinute < startMinute)) {
            return alert("Start time can't be greater than end time")
        }
    
        // Validation tests are passed, add the schedule
        setWorkSchedules(currentValue => {return [...currentValue, workScheduleState]})
    
    }



    return (
        <form className={styles.work_schedule}>
            <DropdownList 
                name = "location"
                nameKey = "title"
                blankOptionValue = "Select location"
                data = {locations}
                handleDropdownOnchange = {handleWorkScheduleOnChange}
            />
            <DropdownList
                name = "day"
                nameKey = "name"
                blankOptionValue = "Select day"
                data = {daysOfTheWeek}
                handleDropdownOnchange = {handleWorkScheduleOnChange}
            />
            <DropdownList
                name = "startTime"
                nameKey = "time"
                blankOptionValue = "Select start time"
                data = {times}
                handleDropdownOnchange = {handleWorkScheduleOnChange}
            />
            <DropdownList
                name = "endTime"
                nameKey = "time"
                blankOptionValue = "Select end time"
                data = {times}
                handleDropdownOnchange = {handleWorkScheduleOnChange}
            />
            <button onClick = {addWorkSchedule}>Add</button>
        </form>
    );

}


export default WorkScheduleForm;