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



export default function DateTime ({ 
    state, 
    activePage, 
    selectedTreatments, 
    setSortedSelectedTreatments,
    location,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime 
}) {

    const [dates, setDates] = useState([]);
    const [dateTimes, setDateTimes] = useState([]);
    
    const [dateIndex, setDateIndex] = useState(0);
   



    useEffect(() => {

        setDates(getDates());

    }, [])

  
    console.log(dateTimes);
    console.log(selectedTime);
    return (
        <div className={styles.date_time} style = {{display: activePage === 3 ? "block" : "none"}}>

            <ChooseStylists 
                selectedTreatments = {selectedTreatments} 
                setSortedSelectedTreatments = {setSortedSelectedTreatments}
                location = {location} 
                setDateTimes = {setDateTimes}
                setSelectedDate = {setSelectedDate}
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
                                    dateTime = {dateTime}
                                    selectedDate = {selectedDate}
                                    setSelectedDate = {setSelectedDate} 
                                    selectedTime = {selectedTime}
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
                                    style = {{display: selectedDate === dateTime.dateInDateFormat ? "flex" : "none"}}
                                >
                                    {dateTime.times.map(time => {
                                        return (
                                            <div key = {time} style={{position: "relative"}}>
                                                <div
                                                    onClick = {
                                                        event => selectedTime === event.target.textContent ? setSelectedTime("") : setSelectedTime(event.target.textContent)
                                                    } 
                                                    className={styles.dateHidden_div}
                                                >
                                                    {`${selectedDate}T${time}`}
                                                </div>

                                                <p
                                                   
                                                    className={styles.individual_time}
                                                    style ={{
                                                        backgroundImage: selectedTime === `${selectedDate}T${time}` && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
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