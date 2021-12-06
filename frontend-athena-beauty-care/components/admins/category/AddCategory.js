// Components
import Input from "../../reusable-components/Input";

// Stylesheet
import styles from "../../../styles/locations/AddLocation.module.css"





export default function AddCategory ({ 
    categoryInfo, setCategoryInfo, isAddingUpdating, setIsAddingUpdating, addUpdateCategory, validationError
}) {

    
    function categoryInfoOnChange (event) {

        const name = event.target.name;
        const value = event.target.value;
    
        setCategoryInfo(currentVal => {
            return {
                ...currentVal,
                [name]: value
            };
        });
    
    }
   

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
            <button onClick = {() => setIsAddingUpdating(false)}>Close</button>
            <button value = {categoryInfo.categoryId} onClick = {addUpdateCategory}>Save</button>
        </div>
    );
}