// Next Modules
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "./images/6.svg";


// Stylesheet
import styles from "../../../styles/InformationPayment.module.css";

// libs


// components
import Input from "./Input";




export default function NameInput ({ name,  }) {




    return (
        <div className={styles.name_input}>
        
            <p>Name</p>
            <div className={styles.nameInput_content}>
                <input type = "text" name = {name} placeholder="First Name" value = {clientInfo.firstName}
            </div>
            
        </div>



    );
}