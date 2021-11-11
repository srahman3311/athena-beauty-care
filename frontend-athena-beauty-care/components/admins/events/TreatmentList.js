




export default function TreatmentList({ eventState, eventInfo, setEventState, setEventInfo, eventInfoOnChange }) {

    const { treatments } = eventState;
    const { treatmentName } = eventInfo;

    return (
        <div className="product_dropdown">
            <p>Select Treatment</p>
           <select 
                name = "treatmentName" 
                onChange = {event => eventInfoOnChange(event, setEventInfo, eventState, setEventState)} 
                value = {treatments.length && !treatmentName ? treatments[0].title : treatmentName}
            >
                {/* <option value = "Select product">Select product</option> */}
                {treatments.map((treatment, index) => {
                    return (

                        <option key = {index + 1}>{treatment.title}</option>
                        
                        // !product.availability && <OptionComponent key = {index + 1} product = {product} />
                    );
                })}
            </select> 
        </div>
    );
}


