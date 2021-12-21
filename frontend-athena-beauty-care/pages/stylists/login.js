// Next Modules
import { useRouter } from "next/router"; // For Redirecting 
import Head from "next/head"; // For google fonts and others
import styles from "../../styles/Login.module.css";

// React Modules
import { useState } from "react";
import axios from "axios";



// components
import UserLogin from "../../components/reusable-components/UserLogin";


export default function Login () {

    // Initializing next router
    const router = useRouter();

    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [stylistInfo, setStylistInfo] = useState({ emailUsername: "", password: "" });
    const [validationError, setValidationError] = useState(false);
   

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

    
        const { emailUsername, password } = stylistInfo;

        if(!emailUsername || !password) return setValidationError(true);

        axios.post("http://localhost:7070/api/stylists/login", stylistInfo, {withCredentials: true})
            .then(response => {

                const { email, username, stylistHasAddedGoogleCalendar } = response.data;

                console.log(response.data);
                localStorage.setItem("stylistEmail", email);
                localStorage.setItem("stylistUsername", username);
                localStorage.setItem("stylistHasAddedGoogleCalendar", stylistHasAddedGoogleCalendar);
                router.push("/stylists/calendar");
            })
            .catch(error => setServerErrorMessage(error.response.data))
    }
    
    return (
        <div className={styles.login}>
            <UserLogin 
                emailUsername = {stylistInfo.emailUsername}
                password = {stylistInfo.password}
                validationError = {validationError}
                serverErrorMessage = {serverErrorMessage}
                handleChange = {handleChange}
                login = {login}
            />
        </div>
    );
}