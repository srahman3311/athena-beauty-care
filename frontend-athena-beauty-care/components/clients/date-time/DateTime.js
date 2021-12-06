// Next Modules
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
import Logo from "../../../images/5.svg";

// Stylesheet
import styles from "../../../styles/DateTime.module.css";

// libs
import { getDates } from "../../../lib/getDates";

// components
import ChooseStylists from "./choose-stylists/ChooseStylists";
import DateCard from "./DateCard";
import Stylists from "./Stylists";
import Times from "./Times";
import ItemHeader from "../client-reusable-components/ItemHeader";



export default function DateTime ({ state, activePage, selectedTreatments }) {

    const [dates, setDates] = useState([]);

    useEffect(() => {

        setDates(getDates());

    }, [])

    

    return (
        <div className={styles.date_time} style = {{display: activePage === 3 ? "block" : "none"}}>

            <ChooseStylists selectedTreatments = {selectedTreatments} />
            <Script src="https://kit.fontawesome.com/14ab8b126d.js" crossorigin="anonymous" />
            <ItemHeader content = "Select date/time" />

            <div className={styles.dateTime_content}>
                <div className={styles.content_Image}>
                    <Image
                        // layout and objecFit properties must be set to fill to make the image fit to it's container.  
                        // layout="fill"
                        // objectFit="fill"
                        src={Logo} 
                        alt="Login Background Image" 
                    />
                </div>
                <div className={styles.dates_container}>

                    <button className={styles.prev}><i className="fas fa-chevron-left"></i></button>
                    <button className={styles.next}><i className="fas fa-chevron-right"></i></button>

                    <div className={styles.dates}>
                        {dates.map((date, index) => {
                            return (
                                <DateCard key = {index + 1} date = {date} />
                            );
                        })}
                    </div>
                </div>
                
              

            </div>

            <div className = {styles.stylists_times}>
                <Stylists />
                <Times />
               
            </div>
            
        </div>



    );
}