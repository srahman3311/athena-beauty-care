// Modifier functions
import { fetchLocationData } from "../../libs/location-modifiers/fetchLocationData";
import { searchLocations } from "../../libs/location-modifiers/searchLocations";
import { displayHideLocationForm } from "../../libs/location-modifiers/displayHideLocationForm";
import { deleteLocation } from "../../libs/location-modifiers/deleteLocation";


// React Modules
import { useEffect, useState } from "react";

// Stylesheet
import styles from "../../styles/locations/Location.module.css";

// components

// Table Components
import ItemTableHeader from "../../components/reusable-components/item-table/ItemTableHeader";
import ItemTableData from "../../components/reusable-components/item-table/ItemTableData";

// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import AddLocation from "../../components/admins/location/AddLocation";
import DisplayFormButton from "../../components/reusable-components/DisplayFormButton";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import ItemDetailsModal from "../../components/reusable-components/item-details/ItemDetailsModal";
import SearchInput from "../../components/reusable-components/SearchInput";



export default function Location () {

    const locationHeaders = [
        "_id", "Title", "Address1", "Address2", "City", "Country", "Phone", "Zip Code", "Action", "__v", "Delete"
    ];

    const [locationId, setLocationId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    // const [display]
    const [locationInfo, setLocationInfo] = useState({
        locationId: "",
        title: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        phone: "",
        zipCode: ""
    });
    const [state, setState] = useState({
          locations: [],
          searchText: "",
          skip: 0,
          limit: 20,
          dataLength: 0
    })

 
    useEffect(() => {

        fetchLocationData(state, state.skip, setState);

    }, []);

    console.log(locationInfo);
    
    return (
        <div className={styles.locations} style={{display: "flex"}}>

            <ControlPanel />

            <div className="locations_content" style = {{width: "80%"}}>

                <AddLocation
                    // For input field values
                    locationInfo = {locationInfo}
                    // if true, isAddingUpdating will display the form and will hide if false
                    isAddingUpdating = {isAddingUpdating}
                    // Clicking on close button will invoke this function 
                    displayHideLocationForm = {displayHideLocationForm}
                    // Following attributes will be passed to the displayHideLocationForm function as arguments for
                    // updating the states on close button click event. isAddingUpdating will be set to false,
                    // setLocationInfo will update the locationInfo state with it's initial empty values   
                    setLocationInfo = {setLocationInfo}
                    setIsAddingUpdating = {setIsAddingUpdating}
                />

                <div className="search_add">
                    <SearchInput
                        state = {state}
                        setState = {setState}
                        searchData = {searchLocations} 
                    />
                    <DisplayFormButton
                        text = "Add Location" 
                        displayHideForm = {displayHideLocationForm}
                        setIsAddingUpdating = {setIsAddingUpdating} 
                    />
                </div>

                {/* Styles are in global css */}
                <div className="data-table">
                    <table>
                        <ItemTableHeader itemHeaders = {locationHeaders} />
                        <ItemTableData 
                            items = {state.locations}
                            setItemId = {setLocationId}
                            isAddingUpdating = {isAddingUpdating}
                            state = {state} 
                            setState = {setState}
                            deleteItem = {deleteLocation}
                        />
                    </table>
                </div>

                <NextPrevItems state = {state} setState = {setState} />

                {/* Styles are in globals.css */}
                <ItemDetailsModal
                    itemId = {locationId}
                    setItemId = {setLocationId}
                    items = {state.locations}
                    itemHeaders = {locationHeaders} 
                    setItemInfo = {setLocationInfo}
                    // For displaying location add/update form
                    isAddingUpdating = {isAddingUpdating}
                    setIsAddingUpdating = {setIsAddingUpdating}
                    // Add and update forms are same but need to populate the form's input fields with the data for updating
                    displayHideForm = {displayHideLocationForm}
                />
                
            </div>

        </div>
    );
}