// Next Modules
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

// React Modules
import { useEffect, useState } from "react";

// User Image
import loginBgImage from "../../../images/carton-woman.jpg"

// Stylesheet
import styles from "../../../styles/Nav.module.css"




export default function SideNav2 ({ hasGoogleCalendarAdded }) {

    //localStorage.setItem("stylistHasAddedGoogleCalendar", "Yes");

    // Google Calendar API Parameters
    const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
    const accessType = "access_type=offline";
    const includeScope = "include_granted_scopes=true";
    const responseType = "response_type=code";
    const redirectUri = "redirect_uri=http://localhost:3000/stylists/auth";

    // Google Calendar API Endpoint
    const ep1 = "https://accounts.google.com/o/oauth2/v2/auth?";
    const ep2 = `scope=${SCOPES}&${accessType}&${includeScope}&${responseType}&${redirectUri}&client_id=${process.env.clientId}`;
    const googleOauthEndpoint = ep1 + ep2;
    

    return (

        <div className={styles.sidenav}>
            <Script src="https://kit.fontawesome.com/14ab8b126d.js" crossorigin="anonymous" />
            <div className={styles.sidenav_content}>
                <div className={styles.sidenav_image}>
                    <Image objectFit="contain" id="profile-avatar" src={loginBgImage} alt="Login Background Image" /> 
                </div>

                <Link href="/">
                    <a><i className="fas fa-home"></i></a>
                </Link>
                <Link href="/">
                    <a><i className="fas fa-briefcase"></i></a>
                </Link>
                <Link href="/">
                    <a><i className="fas fa-user-circle"></i></a>
                </Link>
                <Link href="/admins/control-panel">
                    <a><i className="fas fa-cog"></i></a>
                </Link>
                <Link href={googleOauthEndpoint}>
                    <a 
                        style = {{display: hasGoogleCalendarAdded === "No" ? "block" : "none"}}
                    >
                        <i className="fas fa-calendar"></i>
                    </a>
                </Link>
            </div>
        </div>
    );
}