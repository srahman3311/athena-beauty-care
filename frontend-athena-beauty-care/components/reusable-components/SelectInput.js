




export default function SelectInput({ categories, treatmentInfo, setTreatmentInfo, treatmentInfoOnChange }) {


    return (
        <div className="product_dropdown">
            <p>Select Category</p>
           <select 
                name = "category" 
                onChange = {event => treatmentInfoOnChange(event, setTreatmentInfo)} 
                value = {categories.length && !treatmentInfo.category ? categories[0].title : treatmentInfo.category}
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


