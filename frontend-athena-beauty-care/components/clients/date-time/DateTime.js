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



export default function DateTime ({ state, activePage, selectedTreatments, location }) {

    const [dates, setDates] = useState([]);
    const [dateTimes, setDateTimes] = useState([]);
    const [activeDate, setActiveDate] = useState("");
    const [dateIndex, setDateIndex] = useState(0);
    const [choosenTime, setChoosenTime] = useState("");



    useEffect(() => {

        setDates(getDates());

    }, [])

    console.log(choosenTime);
    return (
        <div className={styles.date_time} style = {{display: activePage === 3 ? "block" : "none"}}>

            <ChooseStylists 
                selectedTreatments = {selectedTreatments} 
                location = {location} 
                setDateTimes = {setDateTimes}
                setActiveDate = {setActiveDate}
            />
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
                        {dateTimes.map((dateTime, index) => {
                            return (
                                <DateCard 
                                    key = {index + 1} 
                                    date = {dateTime.date}
                                    activeDate = {activeDate}
                                    setActiveDate = {setActiveDate} 
                                    choosenTime = {choosenTime.substring(0, 6)}
                                />
                            );
                        })}
                    </div>

                    <div className={styles.available_time_list}>
                        {dateTimes.map((dateTime, index) => {
                            return (

                                <div
                                    className={styles.time} 
                                    key = {`${dateTime.date.date}-${dateTime.date.weekDay}`}
                                    style = {{display: activeDate === `${dateTime.date.date}-${dateTime.date.month.toLowerCase()}` ? "flex" : "none"}}
                                >
                                    {dateTime.times.map(time => {
                                        return (
                                            <div key = {time} style={{position: "relative"}}>
                                                <div
                                                    onClick={event => setChoosenTime(event.target.textContent)} 
                                                    className={styles.dateHidden_div}
                                                >
                                                    {`${dateTime.date.date}-${dateTime.date.month.toLowerCase()}-${time}`}
                                                </div>

                                                <p
                                                   
                                                    className={styles.individual_time}
                                                    style ={{
                                                        backgroundImage: choosenTime === `${dateTime.date.date}-${dateTime.date.month.toLowerCase()}-${time}` && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                                                    }}
                                                >
                                                    {time}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                            );
                        })}
                    </div>
                   
                </div>
               

            </div>

            {/* <div className = {styles.stylists_times}>
                <Stylists />
                <Times />
               
            </div>
             */}
        </div>



    );
}