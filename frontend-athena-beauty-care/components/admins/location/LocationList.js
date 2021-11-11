// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
//import styles from "../../styles/ControlPanel.module.css";
import styles from "../../../styles/locations/Location.module.css";

// React Modules
import { useEffect, useState } from "react";
import axios from "axios";

// components
// import ControlPanel from "../../components/admins/control-panel/ControlPanel";
// import LocationAddForm from "./AddLocation";
import LocationTable from "./LocationTable";
import Input from "../../reusable-components/Input";
import ListBody from "./list/ListBody";
import ListHeader from "./list/ListHeader";
import Search from "./list/Search";
import ViewLimit from "./list/ViewLimit";





export default function LocationList () {

    const [locations, setLocations] = useState([]);
    const [hideForm, setHideForm] = useState(true);
    const [validationErrors, setValidationErrors] = useState({ 
        isEmpty: false, 
        // isEmailInvalid: false,
        // isPasswordInvalid: false, 
        // isMatch: true 
    });
    const [locationInfo, setLocationInfo] = useState({
        title: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        phone: "",
        zipCode: ""
    });



    useEffect(() => {

        async function getLocations() {

        try {

            const response = await axios.get("http://localhost:7070/api/locations");
            
            setLocations(response.data.locations);

        } catch(error) {
            console.log(error.response.data.msg);
        }


        }

        getLocations();

    }, []);

    async function locationInfoOnchangeHandler(event) {

        const name = event.target.name;
        const value = event.target.value;

        setLocationInfo(currentVal => {
            return {
                ...currentVal,
                [name]: value
            };
        });

        console.log(locationInfo);

    }

    async function addLocation () {

        try {

            const endpoint = "http://localhost:7070/api/locations/add-location";
            
            const response = await axios.post(endpoint, locationInfo);


        } catch(error) {
            console.log(error.response.data.msg);
        }

    }

    return (
        <div className={styles.location_list}>
           <h1>Location</h1>
           <button 
                style = {{marginBottom: "40px"}} 
                onClick={() => hideForm ? setHideForm(false) : setHideForm(true)}
           >
               Add Location
            </button>

           <div className="" style = {{display: hideForm ? "block" : "none"}}>
               <LocationTable data = {locations} />
           </div>


          

           {/* style={{display: hideForm ? "none" : "block"}} */}

           <div className="locationAdd_form"  style={{display: hideForm ? "none" : "block"}}>
                <Input 
                    type="text"
                    name="title"
                    value = {locationInfo.title}
                    placeholder="Location Title"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />

                <Input
                    type="text"
                    name="address1"
                    value = {locationInfo.address1}
                    placeholder="Address 1"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />  

                <Input 
                    type="text"
                    name="address2"
                    value = {locationInfo.address2}
                    placeholder="Address 2"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />  

                <Input 
                    type="text"
                    name="city"
                    value = {locationInfo.city}
                    placeholder="City"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />  

                <Input 
                    type="text"
                    name="country"
                    value = {locationInfo.country}
                    placeholder="Country"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />  
                <Input 
                    type="text"
                    name="phone"
                    value = {locationInfo.phone}
                    placeholder="Phone"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                />  
                <Input 
                    type="text"
                    name="zipCode"
                    value = {locationInfo.zipCode}
                    placeholder="Zip Code"
                    locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                    validationErrors = {validationErrors}
                /> 

                <button onClick={addLocation}>Save</button> 
            </div>

          
        </div>
    );
}



 {/* <LocationAddForm 
                locationInfo = {locationInfo}
                locationInfoOnchangeHandler = {locationInfoOnchangeHandler}
                addLocation = {addLocation}
                hideForm = {hideForm}
                validationErrors = {validationErrors}
/> */}