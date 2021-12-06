




export default function CategoryList({ eventState, setEventState, eventInfo, setEventInfo, eventInfoOnChange }) {

    const { categories } = eventState;
    const { treatmentCategory } = eventInfo;

    return (
        <div className="product_dropdown">
            <p>Select Category</p>
           <select 
                name = "treatmentCategory" 
                onChange = {event => eventInfoOnChange(event, setEventInfo, eventState, setEventState)} 
                value = { categories.length && !treatmentCategory ? categories[0].title : treatmentCategory }
            >
                {categories.map((category, index) => {
                    return (
                        <option key = {index + 1}>{category.title}</option>
                    );
                })}
            </select> 
        </div>
    );
}


