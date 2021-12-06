// Next Modules
// import Script from "next/script";
// import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../../../libs/useAxios";
// import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
// import Logo from "../../../images/5.svg";

// Stylesheet
import styles from "../../../styles/client-ui/Location.module.css";
import LocationIcon from "./LocationIcon";
import ItemHeader from "../client-reusable-components/ItemHeader";
import EventHandlerDiv from "../client-reusable-components/EventHandlerDiv";

// components



export default function Location ({ activePage, state, updateState }) {

    const {data, error, loading} = useAxios("get", "http://localhost:7070/api/locations", {});
    const [locations, setLocations] = useState([]);

    useEffect(() => {

        if(data !== null) setLocations(data);
        // if(categoryData !== null) setCategories(categoryData);
        // if(treatmentData !== null) setTreatments(treatmentData);

    }, [data])


    if(loading) return <div>Loading....</div>
    if(error) return <div>Something went wrong</div>

    return (

        <div className={styles.select_location} style = {{display: activePage === 1 ? "block" : "none"}}>

           
            <ItemHeader content = "Select location" />
      
            <div className={styles.location_list}>
                {locations.map((location, index) => {
                        return (
                            <div key = {index + 1} className={styles.wrapper}>
                        
                                <EventHandlerDiv content = {location.title} clickEventHandler = {updateState} />

                                <div className={styles.locationInfo_container}>
                                    <div 
                                        className={styles.location_info} 
                                        style = {{
                                            backgroundColor: state.location === location.title && "blue"
                                        }}
                                    >
                                        <div className={styles.location_content}>
                                            <h5>{location.title}</h5>
                                            <p>{location.address1}, {location.address2}</p>
                                            <p>Zip Code: {location.zipCode}</p>
                                            <p>Phone: {location.phone}</p>
                                            <p>{location.city}</p>
                                            <p>{location.country}</p>
                                        </div>
                                        <LocationIcon />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            
            </div>
               
        </div>



    );
}