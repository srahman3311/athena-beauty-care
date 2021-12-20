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
import Event from "../client-reusable-components/Event";


// components




export default function Confirmation ({ activePage, clientEvents }) {

    console.log(clientEvents);

    const [dates, setDates] = useState([]);

    useEffect(() => {

        setDates(getDates());

    }, [])

    

    return (
        <div  style = {{display: activePage === 5 ? "block" : "none", textAlign: "center"}}>

            <ItemHeader content = "Confirmation" />

            {
                clientEvents.length
                &&
                clientEvents.map(event => {
                    return (
                        <Event key = {event._id.toString()} event = {event} />
                    ); 
                })
            }

        </div>

    );
}