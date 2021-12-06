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
    const [adminInfo, setAdminInfo] = useState({ email: "", password: "" });
    const [validationErrors, setValidationErrors] = useState({
        isEmpty: false,
        doesAdminExist: false,
        isPasswordInvalid: false
    })



    function handleChange (event) {
        
        const name = event.target.name;
        const value = event.target.value;

        setAdminInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });
    }


    function login () {


        // Form Validation
        if(!adminInfo.email || !adminInfo.password) {
            return setValidationErrors(currentValue => { return {...currentValue, isEmpty: true} });
        } 

        axios.post("http://localhost:7070/api/admins/login", adminInfo, {withCredentials: true})
            .then(response => {
                console.log(response.data);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("calendarAccessCode", response.data.calendarAccessCode);
                router.push("/admins/calendar");
            })
            .catch(error => setServerErrorMessage(error.response.data.msg))

        // // If form validation is done
        // axios.post("http://localhost:7070/api/users/login", userInfo, {withCredentials: true})
        //     .then(res => {
        //         localStorage.setItem("name", res.data[0].username);
        //         localStorage.setItem("role", res.data[0].role);
        //         localStorage.setItem("status", res.data[0].status);
        //         localStorage.setItem("imgUrl", res.data[0].imgUrl);
        //         localStorage.setItem("filename", res.data[0].filename);
        //         history.push("/dashboard");
        //     })
        //     .catch(err => {
        //         setUsernameError(false);
        //         setPasswordError(false);
        //         setErrorMsg(err.response.data.msg);
        //         return;
        //     });
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

                <div className={styles.login_credentials}>
                    <LoginInput
                        // style = {{marginBottom: "15px"}}
                        label = "Email" 
                        type = "email"
                        name = "email"
                        value = {adminInfo.email}
                        placeholder = "Type your email here"
                        validationErrors = {validationErrors}
                        handleChange = {handleChange}
                    />
                    <LoginInput
                        label = "Password" 
                        type = "password"
                        name = "password"
                        value = {adminInfo.password}
                        placeholder = "Type your password here"
                        validationErrors = {validationErrors}
                        handleChange = {handleChange}
                    />
                    {/* <div className={styles.forgot_password}>
                        <Link href="/"><a className={styles.forgot_password}>forgot password?</a></Link>
                    </div> */}
                    
                </div>
                <div className={styles.login_button}>
                    <button onClick = {login}>Login</button>
                </div>
                <Link href="/"><a className={styles.forgot_password}>Forgot password?</a></Link>
                {/* <div className={styles.register_prompt}>
                    <p className={styles.blank_border}></p>
                    <Link href="/"><a className={styles.register_link} >Or Register Now</a></Link>
                    <p className={styles.blank_border}></p>
                </div> */}
            </div>

        </div>
    );
}