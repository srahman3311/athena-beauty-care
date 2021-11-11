//

export default function EventsTableData ({ events, setEventId, eventState, setEventState, deleteEvent }) {



    
    return (
        <tbody>
            {events.map((event, index) => {
                return (
                    <tr key = {index + 1}>

                        {/* <td>{event.title}</td> */}
                        <td>{event.eventLocation}</td>
                        <td>{event.stylist}</td>
                        <td>{event.treatmentCategory}</td>
                        <td>{event.treatmentName}</td>
                        <td>{event.eventDuration} minutes</td>
                        <td>${event.eventPrice}</td>
                        <td>{event.endTime.substring(0, event.endTime.indexOf("T"))}</td>
                        <td>{event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length)}</td>
                        <td>{event.endTime.substring(event.endTime.indexOf("T") + 1, event.endTime.length)}</td>
                        <td>{event.clientName}</td>
                        <td>{event.clientEmail}</td>
                        <td>{event.clientPhone}</td>
                        <td>{event.status}</td>

                        {/* <td>
                            <button onClick = {() =>  setEventId(event._id.toString())}>
                                View
                            </button>
                        </td>
                        <td>
                            <button
                                value = {event._id.toString()} 
                                onClick = {event =>  deleteEvent(event.target.value, eventState, setEventState)}
                            >
                                Delete
                            </button>
                        </td> */}
                    </tr>
                );
            })}
        </tbody>
    );
}