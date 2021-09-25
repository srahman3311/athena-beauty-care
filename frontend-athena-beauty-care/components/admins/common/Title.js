// Next Modules
import Link from "next/link";

// Stylesheet
import styles from "../../../styles/Title.module.css";




export default function Title () {
    
    return (
        <div className={styles.title}>

            <div className={styles.title_name}>
                <h1>Athena Beauty Care</h1>
            </div>
            <div className={styles.title_quote}>
                <p>"It is nothing to die, it is frightful not to live." (Victor Hugo)</p>
            </div>
            <div className={styles.title_routes}>
                <Link href="/signup"><a className="signup_login_route">Sign Up</a></Link>
                <Link href="/login"><a className="signup_login_route">Login</a></Link>
            </div>
        </div>
    );
}