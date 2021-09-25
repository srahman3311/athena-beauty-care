// Next Modules
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
import Logo from "../../../images/5.svg";

// Stylesheet
import styles from "../../../styles/InformationPayment.module.css";

// libs


// components




export default function Input ({ type, name, placeholder, value, clientInfoOnChangeHandler, validationError }) {



    return (
        <div className={styles.input}>

            <input 
                type = {type} 
                name = {name} 
                placeholder = {placeholder} 
                value = {value} 
                onChange = {clientInfoOnChangeHandler}
            />

            <p 
                style = {{
                    display: validationError ? "block" : "none",
                    color: "red"
                }}
            >
               {placeholder.toLowerCase()} can't be blank
            </p>
        </div>
    );
}