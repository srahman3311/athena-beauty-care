// Modifier functions
import { fetchTreatmentData } from "../../libs/treatment-modifiers/fetchTreatmentData";
import { searchTreatments } from "../../libs/treatment-modifiers/searchTreatments";
import { displayHideTreatmentForm } from "../../libs/treatment-modifiers/displayHideTreatmentForm";
import { deleteTreatment } from "../../libs/treatment-modifiers/deleteTreatment";


// React Modules
import { useEffect, useState } from "react";
import AddTreatment from "../../components/admins/treatment/AddTreatment";

// Stylesheet
import styles from "../../styles/locations/Location.module.css";

// components

// Table Components
import ItemTableHeader from "../../components/reusable-components/item-table/ItemTableHeader";
import ItemTableData from "../../components/reusable-components/item-table/ItemTableData";

// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import DisplayFormButton from "../../components/reusable-components/DisplayFormButton";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import ItemDetailsModal from "../../components/reusable-components/item-details/ItemDetailsModal";
import SearchInput from "../../components/reusable-components/SearchInput";



export default function Treatment () {

    const treatmentHeaders = [
        "_id", "Category", "Title", "Description", "Duration", "Price", "Remarks", "Details", "__v", "Delete"
    ];

    const treatmentHeadersForItemDetails = ["Category", "Title", "Description", "Duration", "Price", "Remarks"];

    const [treatmentId, setTreatmentId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [treatmentInfo, setTreatmentInfo] = useState({
        treatmentId: "",
        category: "",
        title: "",
        description: "",
        duration: "",
        price: "",
        stylists: [],
        remarks: ""
    });
    const [state, setState] = useState({
        treatments: [],
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    });

 
    useEffect(() => {

        fetchTreatmentData(state, state.skip, setState);

    }, []);

    console.log(treatmentInfo);
    
    return (
        <div className={styles.locations} style={{display: "flex"}}>

            <ControlPanel />

            <div className="locations_content" style = {{width: "80%"}}>

                <AddTreatment
                    // For input field values
                    treatmentInfo = {treatmentInfo}
                    // if true, isAddingUpdating will display the form and will hide if false
                    isAddingUpdating = {isAddingUpdating}
                    // Clicking on close button will invoke this function 
                    displayHideTreatmentForm = {displayHideTreatmentForm}
                    // Following attributes will be passed to the displayHideTreatmentForm function as arguments for
                    // updating the states on close button click event. isAddingUpdating will be set to false,
                    // setTreatmentInfo will update the treatmentInfo state with it's initial empty values   
                    setTreatmentInfo = {setTreatmentInfo}
                    setIsAddingUpdating = {setIsAddingUpdating}
                />

                <div className="search_add">
                    <SearchInput
                        state = {state}
                        setState = {setState}
                        searchData = {searchTreatments} 
                    />
                    <DisplayFormButton
                        text = "Add Location" 
                        displayHideForm = {displayHideTreatmentForm}
                        setIsAddingUpdating = {setIsAddingUpdating} 
                    />
                </div>

                {/* Styles are in global css */}
                <div className="data-table">
                    <table>
                        <ItemTableHeader itemHeaders = {treatmentHeaders} />
                        <ItemTableData 
                            items = {state.treatments}
                            setItemId = {setTreatmentId}
                            isAddingUpdating = {isAddingUpdating}
                            state = {state} 
                            setState = {setState}
                            deleteItem = {deleteTreatment}
                        />
                    </table>
                </div>

                <NextPrevItems state = {state} setState = {setState} />

                {/* Styles are in globals.css */}
                <ItemDetailsModal
                    itemId = {treatmentId}
                    setItemId = {setTreatmentId}
                    items = {state.treatments}
                    itemHeaders = {treatmentHeadersForItemDetails } 
                    setItemInfo = {setTreatmentInfo}
                    // For displaying location add/update form
                    isAddingUpdating = {isAddingUpdating}
                    setIsAddingUpdating = {setIsAddingUpdating}
                    // Add and update forms are same but need to populate the form's input fields with the data for updating
                    displayHideForm = {displayHideTreatmentForm}
                />
                
            </div>

        </div>
    );
}