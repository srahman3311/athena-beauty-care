



export default function LocationList({ eventState, setEventState, eventInfo, setEventInfo, eventInfoOnChange }) {

    const { locations } = eventState;
    const { eventLocation } = eventInfo;

    return (
        <div className="product_dropdown">
            <p>Select location</p>
           <select 
                name = "eventLocation" 
                onChange = {event => eventInfoOnChange(event, setEventInfo, eventState, setEventState)} 
                value = { locations.length && !eventLocation ? locations[0].title :eventLocation }
            >
                {/* <option value = "Select product">Select product</option> */}
                {locations.map((location, index) => {
                    return (

                        <option key = {index + 1}>{location.title}</option>
                        
                        // !product.availability && <OptionComponent key = {index + 1} product = {product} />
                    );
                })}
            </select> 
        </div>
    );
}


