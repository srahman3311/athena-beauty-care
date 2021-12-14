// Next Modules
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
import Logo from "../../../images/5.svg";

// Stylesheet
//import styles from "../../../styles/InformationPayment.module.css";

// libs
import { getDates } from "../../../lib/getDates";
import ItemHeader from "../client-reusable-components/ItemHeader";

// components




export default function Confirmation ({ activePage, clientEvents }) {

    console.log(clientEvents);

    const [dates, setDates] = useState([]);

    useEffect(() => {

        setDates(getDates());

    }, [])

    


    return (
        <div  style = {{display: activePage === 5 ? "block" : "none"}}>

            <ItemHeader content = "Confirmation" />

           

            {clientEvents.map(event => {

                return (
                    <div className="client_events" key = {event._id.toString()}>
                        <p>{event.description}</p>
                        <p>{event.eventDuration}</p>
                        <p>
                            Event will start from {event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length)}
                        </p>
                    </div>
                );
            })}
            
        </div>



    );
}