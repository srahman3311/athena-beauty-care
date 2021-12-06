// Components
import Input from "../../reusable-components/Input";
import StylistList from "./StylistList";
import DropdownList from "../../reusable-components/DropdownList";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"



export default function AddTreatment ({ 
    categories,
    stylists,
    treatmentInfo, 
    setTreamentInfo,
    setTreatmentInfo, 
    isAddingUpdating, 
    setIsAddingUpdating,
    addUpdateTreatment, 
    validationError 
}) {


    function treatmentInfoOnChange(event) {

        const name = event.target.name;
        const value = event.target.value;
    
        setTreamentInfo(currentVal => {
            return {
                ...currentVal,
                [name]: value
            };
        });
    }


    function addStylist(event) {

        const stylist = event.target.value;

        if(treatmentInfo.stylists.includes(stylist)) return alert(`${stylist} has already been added`);


        const stylistArray = [];

        treatmentInfo.stylists.forEach(item => stylistArray.push(item));

        stylistArray.push(stylist);

        setTreatmentInfo(currentVal => {
            return {
                ...currentVal,
                stylists: stylistArray
            }
        });

    }

    function removeStylist(event) {

        const stylist = event.target.value;

        // const newArray = addedStylists.filter(item => item !== stylist);

        const stylistArray = treatmentInfo.stylists.filter(item => item !== stylist);

        setTreatmentInfo(currentVal => {
            return {
                ...currentVal,
                stylists: stylistArray
            }
        });
        

    }
   

    console.log(treatmentInfo);
   
    return (

        // Styles are in globals.css
        <div className="add_treatment" style = {{display: isAddingUpdating ? "block" : "none"}}>
            <DropdownList
                name = "category" 
                nameKey = "title" 
                blankOptionValue = "Select category"
                data = {categories} 
                handleDropdownOnchange = {treatmentInfoOnChange}
            />

            <StylistList
                stylists = {stylists} 
                treatmentInfo = {treatmentInfo}
                addStylist = {addStylist}
                removeStylist = {removeStylist}
            />

            <Input 
                label = "Title"
                type = "text"
                name = "title"
                setData = {setTreatmentInfo}
                value = {treatmentInfo.title}
                placeholder = "Shaping brows"
                onChange = {treatmentInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Description"
                type = "text"
                name = "description"
                setData = {setTreatmentInfo}
                value = {treatmentInfo.description}
                placeholder = "lorem ipsum"
                onChange = {treatmentInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Duration(In mins)"
                type = "number"
                name = "duration"
                setData = {setTreatmentInfo}
                value = {treatmentInfo.duration}
                placeholder = ""
                onChange = {treatmentInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Price"
                type = "number"
                name = "price"
                setData = {setTreatmentInfo}
                value = {treatmentInfo.price}
                placeholder = ""
                onChange = {treatmentInfoOnChange}
                error = {validationError}
            />

            <Input 
                label = "Additional Information"
                type = "text"
                name = "remarks"
                setData = {setTreatmentInfo}
                value = {treatmentInfo.remarks}
                placeholder = "coupons etc"
                onChange = {treatmentInfoOnChange}
                error = {validationError}
            />

            <button onClick = {() => setIsAddingUpdating(false)}>Close</button>
            <button value = {treatmentInfo.treatmentId} onClick = {addUpdateTreatment}>Save</button>
            
           
        </div>
    );
}