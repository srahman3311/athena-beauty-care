// Next Modules
import { useRouter } from "next/router"; // For Redirecting 
import styles from "../../styles/Login.module.css";

// React Modules
import {useState } from "react";
import axios from "axios";

// components
import UserLogin from "../../components/reusable-components/UserLogin";


export default function Login () {

    // Initializing next router
    const router = useRouter();

    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [adminInfo, setAdminInfo] = useState({ emailUsername: "", password: "" });
    const [validationError, setValidationError] = useState(false);
   

    function handleChange (event) {

        const { name, value } = event.target;

        setAdminInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });
    }


    function login (event) {

        event.preventDefault();

    
        const { emailUsername, password } = adminInfo;

        if(!emailUsername || !password) return setValidationError(true);

        axios.post("http://localhost:7070/api/admins/login", adminInfo, {withCredentials: true})
            .then(response => {

                const { email, username, adminHasAddedGoogleCalendar } = response.data;

                console.log(response.data);
                localStorage.setItem("adminEmail", email);
                localStorage.setItem("adminUsername", username);
                localStorage.setItem("adminHasAddedGoogleCalendar", adminHasAddedGoogleCalendar);
                router.push("/admins/calendar");
            })
            .catch(error => setServerErrorMessage(error.response.data))
    }
    
    return (
        <div className={styles.login}>
            <UserLogin 
                emailUsername = {adminInfo.emailUsername}
                password = {adminInfo.password}
                validationError = {validationError}
                serverErrorMessage = {serverErrorMessage}
                handleChange = {handleChange}
                login = {login}
            />
        </div>
    );
}





