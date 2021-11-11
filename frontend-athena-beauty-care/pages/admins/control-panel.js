// Next Modules
import Link from "next/link";
import { useRouter } from "next/router"; // For Redirecting 
import Image from "next/image";
import Head from "next/head"; // For google fonts and others
import styles from "../../styles/ControlPanel.module.css";

// React Modules
import { useEffect, useState } from "react";
import axios from "axios";





// components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";

export default function AdminArea () {

    return (
        <div className={styles.admin_area} style={{height:"100vh"}}>
           <ControlPanel />
           <h1 style={{marginLeft: "30px"}}>Content</h1>
        </div>
    );
}