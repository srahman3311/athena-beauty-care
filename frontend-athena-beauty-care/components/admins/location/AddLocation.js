// React Modules
import { useEffect, useState } from "react";

// location-modifiers
import { locationInfoOnChange } from "../../../libs/location-modifiers/locationInfoOnChange";
import { addUpdateLocation } from "../../../libs/location-modifiers/addUpdateLocation";
// import { hideAddLocationForm } from "../../../libs/location-modifiers/hideAddLocationForm";

// Components
import Input from "../../reusable-components/Input";
import SaveButton from "../../reusable-components/SaveButton";
import CloseFormButton from "../../reusable-components/CloseFormButton";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"
import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";




export default function AddLocation ({ 
    locationInfo, setLocationInfo, isAddingUpdating, setIsAddingUpdating, displayHideLocationForm 
}) {

    const [successFailMessage, setSuccessFailMessage] = useState("");
    const [validationError, setValidationError] = useState(false);
    
   
    
    // console.log(locationInfo);

    return (

        // Styles are in globals.css
        <div className="add_location" style = {{display: isAddingUpdating ? "block" : "none"}}>
            <Input 
                label = "Title"
                type = "text"
                name = "title"
                setData = {setLocationInfo}
                value = {locationInfo.title}
                placeholder = "Athena Beauty Care ....."
                onChange = {locationInfoOnChange}
                error = {validationError}
            />

            <Input
                label = "Address 1"
                type="text"
                name="address1"
                setData = {setLocationInfo}
                value = {locationInfo.address1}
                placeholder="House, building ...."
                onChange = {locationInfoOnChange}
                error = {validationError}
               
            />  

            <Input 
                label = "Address 2"
                type="text"
                name="address2"
                setData = {setLocationInfo}
                value = {locationInfo.address2}
                placeholder="Street ...."
                onChange = {locationInfoOnChange}
                error = {validationError}
               
            />  

            <Input 
                label = "City"
                type="text"
                name="city"
                setData = {setLocationInfo}
                value = {locationInfo.city}
                placeholder="The Prague ...."
                onChange = {locationInfoOnChange}
                error = {validationError}
               
            />  

            <Input
                label = "Country" 
                type="text"
                name="country"
                setData = {setLocationInfo}
                value = {locationInfo.country}
                placeholder="The Netherlands"
                onChange = {locationInfoOnChange}
                error = {validationError}
               
            />  
            <Input
                label = "Phone" 
                type="text"
                name="phone"
                setData = {setLocationInfo}
                value = {locationInfo.phone}
                placeholder="+31 2545 2225"
                onChange = {locationInfoOnChange}
                error = {validationError}
               
            />  
            <Input 
                label = "Zip Code"
                type="text"
                name="zipCode"
                setData = {setLocationInfo}
                value = {locationInfo.zipCode}
                placeholder="AB25584DL"
                onChange = {locationInfoOnChange}
                error = {validationError}
            /> 

            <SuccessFailMessage 
                successFailMessage = {successFailMessage}
                setSuccessFailMessage = {setSuccessFailMessage}
            />

            
            <CloseFormButton 
                closeForm = {displayHideLocationForm} 
                setData = {setLocationInfo} 
                setIsAddingUpdating = {setIsAddingUpdating}
            />
            <SaveButton
                // To pass to addUpdateLocation function. Empty string will make http request to backend at 
                // add_location endpoint, else update request will be made to backend 
                _id = {locationInfo.locationId} 
                data = {locationInfo} 
                setError = {setValidationError} 
                setSuccessFailMessage = {setSuccessFailMessage}
                addNewItem = {addUpdateLocation} 
            />
        </div>
    );
}