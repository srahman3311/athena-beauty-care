// eslint
import Link from "next/link";

// Stylesheet
import styles from "../../../styles/ControlPanel.module.css";



export default function ControlPanel ()  {
    return ( 
        <div className={styles.control_panel}>
            {/* <h3>Control Panel</h3> */}
            <Link href="/admins/locations"><a>Location</a></Link>
            <Link href="/admins/categories"><a>Categories</a></Link>
            <Link href="/admins/treatments"><a>Treatments</a></Link>
            <Link href="/admins/events"><a>Events</a></Link>
            <Link href="/admins/stylists"><a>Stylists</a></Link>
            <Link href="/events"><a>Coupons</a></Link>
        </div>
    );
}
 
