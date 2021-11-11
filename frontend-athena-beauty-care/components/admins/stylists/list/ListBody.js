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



export default function ListBody ({ admin }) {
    

    return (

        <div className={styles.admin_list_body}>
            <p>{admin.firstName}</p>
            <p>{admin.lastName}</p>
            <p>{admin.username}</p>
            <p>{admin.email}</p>
            <p>
                <Link href={`/admins/${admin.email}`}><a>View Profile</a></Link>
            </p>
        </div>
    );
}