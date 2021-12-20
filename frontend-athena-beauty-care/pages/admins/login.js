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
import ServerErrorMessage from "../../components/reusable-components/ServerErrorMessage";

// components
import InputField from "../../components/reusable-components/InputField";

export default function Login () {

    // Initializing next router
    const router = useRouter();

    const [serverErrorMessage, setServerErrorMessage] = useState("");
    const [adminInfo, setAdminInfo] = useState({ email: "", password: "" });
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

        const { email, password } = adminInfo;

        if(!email || !password) return setValidationError(true);



        axios.post("http://localhost:7070/api/admins/login", adminInfo, {withCredentials: true})
            .then(response => {
                console.log(response.data);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode);
                router.push("/admins/calendar");
            })
            .catch(error => setServerErrorMessage(error.response.data.msg))
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
                <ServerErrorMessage serverErrorMessage = {serverErrorMessage} />

                <form className={styles.login_credentials}>
                    <InputField
                        labelText = "Email" 
                        type = "email"
                        name = "email"
                        value = {adminInfo.email}
                        placeholder = "type your email here"
                        validationError = {validationError}
                        validationErrorMessageFor = "email"
                        handleChange = {handleChange}
                    />
                    <InputField
                        labelText = "Password" 
                        type = "password"
                        name = "password"
                        value = {adminInfo.password}
                        placeholder = "type your password here"
                        validationError = {validationError}
                        validationErrorMessageFor = "password"
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