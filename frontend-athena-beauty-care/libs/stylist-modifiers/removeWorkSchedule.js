export const removeWorkSchedule = (event, addedWorkSchedules, setAddedWorkSchedules) => {

    const day = event.target.value;

    const filteredWorkSchedules = addedWorkSchedules.filter(schedule => schedule.day !== day);

    setAddedWorkSchedules(filteredWorkSchedules);

}