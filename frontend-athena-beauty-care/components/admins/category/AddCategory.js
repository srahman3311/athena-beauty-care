// React Modules
import { useEffect, useState } from "react";

// category-modifiers
import { categoryInfoOnChange } from "../../../libs/category-modifiers/categoryInfoOnChange"
import { addUpdateCategory } from "../../../libs/category-modifiers/addUpdateCategory";


// Components
import Input from "../../reusable-components/Input";
import SaveButton from "../../reusable-components/SaveButton";
import CloseFormButton from "../../reusable-components/CloseFormButton";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"
import SuccessFailMessage from "../../reusable-components/SuccessFailMessage";




export default function AddCategory ({ 
    categoryInfo, setCategoryInfo, isAddingUpdating, setIsAddingUpdating, addUpdateCategory
}) {

    const [successFailMessage, setSuccessFailMessage] = useState("");
    const [validationError, setValidationError] = useState(false);
    
   

    return (

        // Styles are in globals.css
        <div className="add_location" style = {{display: isAddingUpdating ? "block" : "none"}}>
            <Input 
                label = "Title"
                type = "text"
                name = "title"
                setData = {setCategoryInfo}
                value = {categoryInfo.title}
                placeholder = "Brows"
                onChange = {categoryInfoOnChange}
                error = {validationError}
            />

            <SuccessFailMessage 
                successFailMessage = {successFailMessage}
                setSuccessFailMessage = {setSuccessFailMessage}
            />
            <button onClick = {() => setIsAddingUpdating(false)}>Close</button>
            <button value = {categoryInfo.categoryId} onClick = {addUpdateCategory}>Save</button>

{/*             
            <CloseFormButton 
                closeForm = {displayHideCategoryForm} 
                setData = {setCategoryInfo} 
                setIsAddingUpdating = {setIsAddingUpdating}
            />
            <SaveButton
                // To pass to addUpdateLocation function. Empty string will make http request to backend at 
                // add_location endpoint, else update request will be made to backend 
                _id = {categoryInfo.categoryId} 
                data = {categoryInfo} 
                setError = {setValidationError} 
                setSuccessFailMessage = {setSuccessFailMessage}
                addNewItem = {addUpdateCategory} 
            /> */}
        </div>
    );
}