// Modifier functions
import axios from "axios";
import useAxios from "../../libs/useAxios";
//import { searchLocations } from "../../libs/location-modifiers/searchLocations";
import { displayHideLocationForm } from "../../libs/location-modifiers/displayHideLocationForm";
//import { deleteLocation } from "../../libs/location-modifiers/deleteLocation";
import { locationDataTableHeaders } from "../../libs/data";


// React Modules
import { useEffect, useState } from "react";

// Stylesheet
import styles from "../../styles/locations/AddLocation.module.css";

// components
import Loading from "../../components/reusable-components/Loading";

// Table Components
import ItemTableHeader from "../../components/reusable-components/item-table/ItemTableHeader";
import ItemTableData from "../../components/reusable-components/item-table/ItemTableData";

// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import AddLocation from "../../components/admins/location/AddLocation";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import NextPrevView from "../../components/reusable-components/NextPrevView";
import SearchInput from "../../components/reusable-components/SearchInput";
import DataTable from "../../components/reusable-components/data-table/DataTable";
import LocationDetails from "../../components/admins/location/LocationDetails";
import DeletePrompt from "../../components/reusable-components/DeletePrompt";
import Message from "../../components/reusable-components/Message";



export default function Location () {

    // Order of rendering/execution
    // 1. Component render for the first time, no state changes occur - render 1
    // 2. Component mounts - child component's useffect gets run first, in this case custom useAxios hooks' useEffect gets run
    //    so fetchData function is called. At the very first line of fetchData function loading state is set to true and on the next
    //    line axios callback is fired. As it's asynchronous so it doesn't block the other codes. So setLoading causes re-render
    //    everything. - render 2
    // 3. Once callback is finished executing setData and setTotalDataCount cause another re-render and this time value of data 
    //    has changed. - render 3
    // 4. As value of data has changed parent component's useEffect gets run as it has data inside it's dependency array. 
    //    Two state changes occur here (setLocations and setTotalDataCount) so another re-render happens. - render 4
    // 5. finally code block is run setLoading(false) causes another re-render - render 5
    // 6. After finally block has finished executing two useEffect hooks dependency array's values haven't changed so no re-render
    //    occurs 


    const [happening, setHappening] = useState("Fetching");
    const [state, setState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    })

    // Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/locations";
    const requestBody = { searchText: state.searchText, skip: state.skip, limit: state.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody, happening);

    // States
    
    const [actionMessage, setActionMessage] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [locationIdForDeleting, setLocationIdForDeleting] = useState("");
    const [itemNameForDeletePrompt, setItemNameForDeletePrompt] = useState("");
    const [locations, setLocations] = useState([]);
    const [locationTableData, setLocationTableData] = useState([]);
    const [locationId, setLocationId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [validationError, setValidationError] = useState(false);
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
    

 
    useEffect(() => {

        setHappening("fetching");

        if(data !== null) {

            setLocations(data);

            const newData = [];

            data.forEach((location, index) => {

                newData.push({
                    id: index + 1,
                    data: [
                        location.title,
                        location.address1,
                        location.address2,
                        location.city,
                        location.country,
                        location.phone,
                        location.zipCode,
                        `View Details-${location._id.toString()}`,
                        `Delete-${location._id.toString()}`
                    ]

                });

            });

            setLocationTableData(newData);


            setState(currentValue => {
                return {
                    ...currentValue,
                    dataLength: totalDataCount
                };
            });

        }

    }, [data, happening]);



    function openAddLocationModal(event) {

        const index = Number(event.target.value);

        setLocationInfo({
            locationId: locations[index]._id.toString(),
            title: locations[index].title,
            address1: locations[index].address1,
            address2: locations[index].address2,
            city: locations[index].city,
            country: locations[index].country,
            phone: locations[index].phone,
            zipCode: locations[index].zipCode
        });

        setLocationId("");
        setIsAddingUpdating(true);
    }

    function openDeletePrompt (event) {

        const _id = event.target.value;

        setLocationIdForDeleting(_id);

        for(let x = 0; x < locations.length; x++) {

            if(_id === locations[x]._id.toString()) {
                setItemNameForDeletePrompt(locations[x].title);
                break;
            }
        }

        setShowDeletePrompt(true);
    }

    async function addUpdateLocation (event) {

        event.preventDefault();

        // For updating purpose
        const _id = event.target.value;

        const { title, address1, address2, city, country, phone, zipCode } = locationInfo;

        // Form validation
        if (!title || !address1 || !address2 || !city || !country || !phone || !zipCode) {
            return setValidationError(true);
        } 

        setIsAddingUpdating(false);

        try {

            setActionMessage("Saving");

            let endpoint = "http://localhost:7070/api/locations/add-location";

            if(_id) endpoint = "http://localhost:7070/api/locations/update";
              
            const response = await axios.post(endpoint, locationInfo);

            setActionMessage(response.data);
            

        } catch (error) {

            setActionMessage(error.response.data);

        } finally {

            setLocationInfo({
                locationId: "",
                title: "",
                address1: "",
                address2: "",
                city: "",
                country: "",
                phone: "",
                zipCode: ""
            });

            setHappening("refetching afer adding/updating");
        }

    }

    async function deleteLocation(event) {

        const _id = event.target.value; 

        setShowDeletePrompt(false);
        

        try {

            setActionMessage("Deleting");

            const response = await axios.post("http://localhost:7070/api/locations/delete", { _id });

            setActionMessage(response.data.msg);

        } catch(error) {

            console.log(error);

        } finally {

            setHappening("re-fetching");
        }

    }

    function fetchNextPrevItems(event) {

        const newSkip = Number(event.target.value);

        setState(currentValue => {

            return {
                ...currentValue,
                skip: newSkip
            };
        });

        setHappening("refetching after next button clicked");

    }

    
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
                    addUpdateLocation = {addUpdateLocation}
                    validationError = {validationError}
                />

                <div className="search_add">
                    <SearchInput
                        value = {state.searchText}
                        setState = {setState}
                        setHappening = {setHappening}
                    />

                    <button onClick = {() => setIsAddingUpdating(true)}>Add Location</button>
                </div>
                <div className="table" >
                    {
                        error 
                        ?
                        <div>Something went wrong</div> 
                        :
                        loading
                        ?
                        <Loading />
                        :
                        <DataTable
                            tableHeaders = {locationDataTableHeaders} 
                            tableData = {locationTableData}
                            setItemId = {setLocationId}
                            openDeletePrompt = {openDeletePrompt}
                        />
                    }
                </div>

                <LocationDetails
                    locations = {locations}
                    locationId = {locationId} 
                    setLocationId = {setLocationId}
                    openAddLocationModal = {openAddLocationModal}
                />

                <NextPrevItems 
                    state = {state} 
                    setState = {setState} 
                    fetchNextPrevItems = {fetchNextPrevItems}
                />
                <NextPrevView state = {state} />
                <DeletePrompt
                    deleting = {deleting}
                    itemId = {locationIdForDeleting}
                    itemNameForDeletePrompt = {itemNameForDeletePrompt} 
                    showDeletePrompt = {showDeletePrompt} 
                    setShowDeletePrompt = {setShowDeletePrompt} 
                    deleteItem = {deleteLocation}
                />
            </div>

            <Message 
                message = {actionMessage} 
                setActionMessage = {setActionMessage}
            />

        </div>
    );
}