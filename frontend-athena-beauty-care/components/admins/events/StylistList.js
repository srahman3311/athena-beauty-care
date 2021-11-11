




export default function StylistList({ eventState, eventInfo, setEventInfo, eventInfoOnChange }) {

    const { stylists } = eventState;
    const { stylist } = eventInfo;


    

    return (
        <div className="product_dropdown">
            <p>Select stylist</p>
           <select 
                name = "stylist" 
                onChange = {event => eventInfoOnChange(event, setEventInfo)} 
                value = {stylists.length && !stylist ? stylists[0] : stylist}
            >
                {/* <option value = "Select product">Select product</option> */}
                {stylists.map((stylist, index) => {
                    return (

                        <option key = {index + 1}>{stylist}</option>
                        
                        // !product.availability && <OptionComponent key = {index + 1} product = {product} />
                    );
                })}
            </select> 
        </div>
    );
}


