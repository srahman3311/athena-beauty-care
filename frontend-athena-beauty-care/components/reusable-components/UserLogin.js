// Next Modules
import Link from "next/link";
import Image from "next/image";

// Stylesheet
import styles from "../../styles/Login.module.css";

//Images
import loginBgImage from "../../images/naveen-prajapat-eQu4HfK53lk-unsplash.jpg";
import logoImage from "../../images/carton-woman.jpg";

// components
import InputField from "./InputField";
import ServerErrorMessage from "./ServerErrorMessage";


export default function UserLogin ({ 
    emailUsername,
    password,
    validationError,
    serverErrorMessage,
    handleChange,
    login
    
}) {

    
    return (
        <>

            {/* <div className={styles.bgImage}>
                <Image src = {loginBgImage} alt="Login Background Image" />
            </div> */}

            <div className={styles.login_content}>
                <div className={styles.logo}>
                    <Image src = {logoImage} alt ="Cartoon woman" />
                </div>
                <h2 className={styles.login_header}>Hello Gorgeous!</h2>
                
                <form className={styles.login_credentials}>
                    <InputField
                        labelText = "Username or email" 
                        type = "email"
                        name = "emailUsername"
                        value = {emailUsername}
                        placeholder = "type your username or email here"
                        validationError = {validationError}
                        validationErrorMessageFor = "email"
                        handleChange = {handleChange}
                    />
                    <InputField
                        labelText = "Password" 
                        type = "password"
                        name = "password"
                        value = {password}
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
            <ServerErrorMessage serverErrorMessage = {serverErrorMessage} />
        </>
    );
}





