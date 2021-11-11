// Next Modules
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

// Images
// import loginBgImage from "../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
// 127089417-face-expression-of-woman-with-blond-hair-smiling-beautiful-cartoon-character-modern-business-woman-v.jpg
//import loginBgImage from "../../images/127089417-face-expression-of-woman-with-blond-hair-smiling-beautiful-cartoon-character-modern-business-woman-v.jpg";

// Stylesheet
import styles from "../../../../styles/AdminList.module.css"



export default function ListHeader () {
    

    return (

        <div className={styles.admin_list_header}>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Username</p>
            <p>Email</p>
            <p>Profile</p>
        </div>
    );
}