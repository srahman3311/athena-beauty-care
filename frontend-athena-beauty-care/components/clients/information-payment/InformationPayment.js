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




export default function InformationPayment ({ activePage, clientInfo, clientInfoOnChangeHandler, validationError }) {

    // const [dates, setDates] = useState([]);

    // useEffect(() => {

        

    // }, [])



    return (
        <div className={styles.info_payment}  style = {{display: activePage === 4 ? "block" : "none"}}>

           

            <h4 className={styles.infoPayment_header}>Information / Payment</h4>

            <div className={styles.infoPayment_content}>

                <div className={styles.image_container}>
                    <Image
                        src={Logo} 
                        alt="Login Background Image" 
                    />
                </div>

                <div className={styles.name_inputs}>
                    <p className={styles.input_label}>Name</p>
                    <div className={styles.name_info}>
                        <Input
                            type = "text"
                            name = "firstName"
                            placeholder = "First Name"
                            value = {clientInfo.firstName}
                            clientInfoOnChangeHandler = {clientInfoOnChangeHandler}
                            validationError = {validationError} 
                        />
                        <Input
                            type = "text"
                            name = "lastName"
                            placeholder = "Last Name"
                            value = {clientInfo.lastName}
                            clientInfoOnChangeHandler = {clientInfoOnChangeHandler} 
                            validationError = {validationError} 
                        />
                    </div>
                </div>

                <div className={styles.phone_input}>
                    <p className={styles.input_label}>Phone</p>
                    <Input
                        type = "number"
                        name = "phone"
                        placeholder = "+31 235 5632"
                        value = {clientInfo.phone}
                        clientInfoOnChangeHandler = {clientInfoOnChangeHandler}
                        validationError = {validationError} 
                    />
                </div>

                <div className={styles.email_input}>
                    <p className={styles.input_label}>Email</p>
                    <Input
                        type = "email"
                        name = "email"
                        placeholder = "abcd@gmail.com"
                        value = {clientInfo.email}
                        clientInfoOnChangeHandler = {clientInfoOnChangeHandler}
                        validationError = {validationError} 
                    />
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <p>Please keep me informed of the offers and promotions</p>
                    </div>
                    
                </div>

                <div className={styles.howHeardAboutUs_input} style = {{backgroundColor: "green"}}>
                    <p className={styles.input_label}>How did you hear about athena beauty care?</p>

                    <select name = "howHeardAboutUs">
                        <option value = "Friends">Friends</option>
                        <option value = "others">Friends</option>
                    </select>
                    {/* <Input
                        type = "text"
                        name = "howHeardAboutUs"
                        placeholder = ""
                        value = {clientInfo.howHeardAboutUs}
                        clientInfoOnChangeHandler = {clientInfoOnChangeHandler}
                        validationError = {validationError} 
                    /> */}
                    
                </div>
                

                
                {/* <p>Phone</p> */}
               

            </div>
            
        </div>



    );
}