// Next Modules
// import Script from "next/script";
// import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
// import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
// import Logo from "../../../images/5.svg";

// Stylesheet
import styles from "../../../styles/Location.module.css";

// components



export default function Location ({ activePage, state, updateState }) {

    const [locations, setLocations] = useState([]);

    useEffect(async () => {

        try {

            const response = await axios.get("http://localhost:7070/api/locations");

            setLocations(response.data.locations);

        } 
        catch(error) {

            console.log(error.response.data.msg);
        }
        
    }, [])



    return (
        <div className={styles.select_location} style = {{display: activePage === 2 ? "block" : "none"}}>
            <h4>Select the Location</h4>

           <div className={styles.location_list}>
               {locations.map((location, index) => {
                   return (
                        <div key = {index + 1} className={styles.wrapper}>
                            <div 
                                className={styles.location_hiddenDiv} 
                                onClick = {updateState}
                            >
                                {location.name}
                            </div>

                            <div className={styles.locationInfo_container}>
                                <div 
                                    className={styles.location_info} 
                                    style = {{
                                        backgroundColor: state.location === location.name && "blue"
                                    }}
                                >
                                    <div className={styles.location_content}>
                                        <h5>{location.name}</h5>
                                        <p>{location.address1}, {location.address2}</p>
                                        <p>Zip Code: {location.zipCode}</p>
                                        <p>Phone: {location.phone}</p>
                                        <p>{location.city}</p>
                                        <p>{location.country}</p>
                                    </div>
                                    <div className={styles.location_icon}>
                                        <i style = {{color: "darkblue", fontSize: "24px"}} className="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                   );
                })}
        
           </div>
        </div>



    );
}