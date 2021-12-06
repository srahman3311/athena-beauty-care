export const addWorkSchedule = (workScheduleState, setAddedWorkSchedules, addedWorkSchedules) => {


    const { location, day, startTime, endTime } = workScheduleState;
    
    if(!location || !day || !startTime || !endTime) return alert("Please select location, day, start and end time");

    let dayName = "";
    const len = addedWorkSchedules.length;

    for(let i = 0; i < len; i++) {

        if(workScheduleState.day === addedWorkSchedules[i].day) {
            dayName = workScheduleState.day;
            break;
        }

    }


    if(dayName) return alert(`You have already added ${workScheduleState.day} to the work schedule`);

    if(workScheduleState.startTime === workScheduleState.endTime) return alert("start and end time can't be same");

    const startHour = workScheduleState.startTime.substring(0, 2);
    const startMinute = workScheduleState.startTime.substring(3, 5);

    const endHour = workScheduleState.endTime.substring(0, 2);
    const endMinute = workScheduleState.endTime.substring(3, 5);

    if(startHour > endHour || (startHour === endHour && endMinute < startMinute)) {
        return alert("Start time can't be greater than end time")
    }

    setAddedWorkSchedules(currentValue => {return [...currentValue, workScheduleState]})

}