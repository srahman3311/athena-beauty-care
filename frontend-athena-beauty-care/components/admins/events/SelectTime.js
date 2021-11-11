



// Styles are in Stylist.module.css
export default function SelectTime({ name, label, times, value, eventInfoOnChange, setEventInfo }) {


    return (
        <div className="select_time" >
            <p>{label}</p>
            <select
                style = {{width: "100px"}} 
                name = {name} 
                onChange = {event => eventInfoOnChange(event, setEventInfo)} 
                value = {value}
            >
                {/* <option value = "Select product">Select product</option> */}
                {times.map((time, index) => {
                    return (

                        <option key = {index + 1} value = {time}>{time}</option>
                        
                        // !product.availability && <OptionComponent key = {index + 1} product = {product} />
                    );
                })}
            </select> 
            
        </div>
    );
}


