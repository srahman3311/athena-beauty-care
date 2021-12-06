// React Modules
import axios from "axios";

import { useEffect, useState } from "react";

// location-modifiers
import { treatmentInfoOnChange } from "../../../libs/treatment-modifiers/treatmentInfoOnChange";
import { addUpdateTreatment } from "../../../libs/treatment-modifiers/addUpdateTreatment"
// import { locationInfoOnChange } from "../../../libs/location-modifiers/locationInfoOnChange";
// import { addUpdateLocation } from "../../../libs/location-modifiers/addUpdateLocation";
// // import { hideAddLocationForm } from "../../../libs/location-modifiers/hideAddLocationForm";

// Components
import Input from "../../reusable-components/Input";
import SelectInput from "../../reusable-components/SelectInput";
import StylistList from "./StylistList";
import SaveButton from "../../reusable-components/SaveButton";
import CloseFormButton from "../../reusable-components/CloseFormButton";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"
import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";




export default function AddTreatment ({ 
    treatmentInfo, setTreatmentInfo, isAddingUpdating, setIsAddingUpdating, displayHideTreatmentForm 
}) {

    const [categories, setCategories] = useState([]);
    const [stylists, setStylists] = useState([]);
    const [successFailMessage, setSuccessFailMessage] = useState("");
    const [validationError, setValidationError] = useState(false);
    

    useEffect(() => {


      
        axios.get("http://localhost:7070/api/categories")
            .then(response => {

                setCategories(response.data);

                // If user is okay with the first item on the category dropdown then he/she won't click on the dropdown
                // to select one. In such scenario treamentInfo category should be the title of the first category of the
                // category list. Otherwise value of treatmentInfo category property will remain empty string. 
                setTreatmentInfo(currentVal => {
                    return {
                        ...currentVal, 
                        category: response.data[0].title
                    }
                });
        

                axios.get("http://localhost:7070/api/stylists")
                    .then(newResponse => {

                        setStylists(newResponse.data);

                    })
                    .catch(err => alert(err.response.data.msg))



            })
            .catch(err => alert(err.response.data.msg))

    }, []);


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
   
   
    
    // console.log(categories);
    // console.log(stylists);
    // console.log(treatmentInfo);

    return (


        // style = {{display: isAddingUpdating ? "block" : "none"}}
        // Styles are in globals.css
        <div className="add_treatment" style = {{display: isAddingUpdating ? "block" : "none"}}>

            <SelectInput 
                categories = {categories}
                treatmentInfo = {treatmentInfo}
                setTreatmentInfo = {setTreatmentInfo}
                treatmentInfoOnChange = {treatmentInfoOnChange}

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


           

            <SuccessFailMessage 
                successFailMessage = {successFailMessage}
                setSuccessFailMessage = {setSuccessFailMessage}
            />

            
            <CloseFormButton 
                closeForm = {displayHideTreatmentForm} 
                setData = {setTreatmentInfo} 
                setIsAddingUpdating = {setIsAddingUpdating}
            />
            <SaveButton
                // To pass to addUpdateLocation function. Empty string will make http request to backend at 
                // add_location endpoint, else update request will be made to backend 
                _id = {treatmentInfo.treatmentId} 
                data = {treatmentInfo} 
                setError = {setValidationError} 
                setSuccessFailMessage = {setSuccessFailMessage}
                addNewItem = {addUpdateTreatment} 
            />
        </div>
    );
}