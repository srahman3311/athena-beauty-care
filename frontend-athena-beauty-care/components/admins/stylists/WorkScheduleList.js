

function WorkScheduleList({ workSchedules, setWorkSchedules }) {


    function removeWorkSchedule(event) {

        const day = event.target.value;
    
        const filteredWorkSchedules = workSchedules.filter(schedule => schedule.day !== day);
    
        setWorkSchedules(filteredWorkSchedules);
    
    }

    return (

        <div className="workSchedule_list" >

            {workSchedules.map((schedule, index) => {
                return (
                    <div className="" key = {index + 1} style = {{display: "flex", justifyContent: "space-between"}}>
                        <p>{schedule.location}</p>
                        <p>{schedule.day}</p>
                        <p>{schedule.startTime}</p>
                        <p>{schedule.endTime}</p>
                        <button value = {schedule.day} onClick = {removeWorkSchedule}>Remove</button>
                    </div>
                    
                );
            })}

        </div>
    );
}


export default WorkScheduleList;