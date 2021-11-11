// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
//import styles from "../../styles/ControlPanel.module.css";

// React Modules
import { useEffect, useState } from "react";
import axios from "axios";





// components
// import ControlPanel from "../../components/admins/control-panel/ControlPanel";

export default function EventList () {



    async function addEvent () {

        try {

            const endpoint = "http://localhost:7070/api/events/add-event";
            const event = {
                email: "samsur.rahman3311@gmail.com",
                summary: "This is an event",
                start: new Date("2021-10-25T15:30:00").toLocaleString("en-US", {timeZone: "Asia/Dhaka"}),
                end: new Date("2021-10-25T16:15:00").toLocaleString("en-US", {timeZone: "Asia/Dhaka"})
            };

            const response = await axios.post(endpoint, event);

            console.log(response.data.msg);

        } catch(error) {
            console.log(error.response.data.msg);
        }

        axios.post("")
    }









    return (
        <div className="events">
           <h1>Events</h1>
           <button onClick={addEvent}>Add Event</button>
        </div>
    );
}