// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
import styles from "../../styles/Login.module.css";

// React Modules
import { useEffect, useState } from "react";
import axios from "axios";



//Images
import loginBgImage from "../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
import logoImage from "../../images/carton-woman.jpg";

// components
import LoginInput from "../../components/admins/login/LoginInput";

export default function Login () {

    // Initializing next router
    const router = useRouter();

    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [stylistInfo, setStylistInfo] = useState({ emailUsername: "", password: "" });
    const [validationErrors, setValidationErrors] = useState({
        isEmpty: false,
        doesAdminExist: false,
        isPasswordInvalid: false
    })



    function handleChange (event) {

        const { name, value } = event.target;

        setStylistInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });
    }


    function login (event) {

        event.preventDefault();

    
        // Form Validation
        if(!stylistInfo.emailUsername || !stylistInfo.password) {
            return setValidationErrors(currentValue => { return {...currentValue, isEmpty: true} });
        } 

        axios.post("http://localhost:7070/api/stylists/login", stylistInfo, {withCredentials: true})
            .then(response => {

                const { email, username, stylistHasAddedGoogleCalendar } = response.data;

                console.log(response.data);
                localStorage.setItem("stylistEmail", email);
                localStorage.setItem("stylistUsername", username);
                localStorage.setItem("stylistHasAddedGoogleCalendar", stylistHasAddedGoogleCalendar);
                router.push("/stylists/calendar");
            })
            //.catch(error => setServerErrorMessage(error.response.data.msg))
            .catch(error => console.log(error.response.data));
    }
    
    return (
        <div className={styles.login}>
            <div className={styles.bgImage}>
                <Image
                    // layout and objecFit properties must be set to fill to make the image fit to it's container.  
                    layout="fill"
                    objectFit="fill"
                    src={loginBgImage} 
                    alt="Login Background Image" 
                />
            </div>

            <div className={styles.login_content}>
                <div className={styles.logo}>
                    <Image src={logoImage} alt="" />
                </div>
                <h2 className={styles.login_header}>Hello Gorgeous!</h2>

                <p 
                    className={styles.serverError_message} 
                    style = {{display: serverErrorMessage ? "block" : "none", }}
                >
                    {serverErrorMessage}
                </p>

                <form className={styles.login_credentials}>
                    <LoginInput
                        label = "Username/Email" 
                        type = "email"
                        name = "emailUsername"
                        value = {stylistInfo.emailUsername}
                        placeholder = "Type your email or username here"
                        validationErrors = {validationErrors}
                        handleChange = {handleChange}
                    />
                    <LoginInput
                        label = "Password" 
                        type = "password"
                        name = "password"
                        value = {stylistInfo.password}
                        placeholder = "Type your password here"
                        validationErrors = {validationErrors}
                        handleChange = {handleChange}
                    />
                </form>
                <div className={styles.login_button}>
                    <button onClick = {login}>Login</button>
                </div>
                <Link href="/"><a className={styles.forgot_password}>Forgot password?</a></Link>
                
            </div>

        </div>
    );
}