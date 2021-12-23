import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For Redirecting 
import axios from "axios";

// Stylesheet
import styles from "../../styles/Layout.module.css";

function Layout({ children }) {

    const router = useRouter();

    const [user, setUser] = useState("");
    const [location, setLocation] = useState("");
    const [userType, setUserType] = useState("");
    const [endpoint, setEndpoint] = useState("");
    const [logout, setLogout] = useState(false);

    useEffect(() => {

        async function logUserOut() {

            try {
                const response = await axios.get(endpoint, {withCredentials: true});

                localStorage.clear();

                if(userType === "stylists") return router.push("/stylists/login");

                return router.push("/admins/login");

            } catch(error) {
                console.log(error);
            }
            
        }

        if(logout) {
            logUserOut();
        }

        const stylistEmail = localStorage.getItem("stylistEmail");
        const adminEmail = localStorage.getItem("adminEmail");

        setUser(stylistEmail ? stylistEmail : adminEmail);
        setLocation(router.pathname);
        setUserType("admins");

        if(location === "/stylists/calendar") setUserType("stylists");

        setEndpoint(`http://localhost:7070/api/${userType}/logout`);
        

    }, [userType, logout])


    console.log(userType, endpoint)

    // const logout = () => {

    //     // As cookie can't be removed from client side so this task should be sent to backend but make 
    //     // sure that withCredentials:true is sent along with the request otherwise cookie won't be removed. 
    //     axios.get("http://localhost:7070/api/stylists/logout", {withCredentials: true})
    //         .then(res => {
    //             localStorage.clear();
    //             if(userType === "stylists") return router.push("/stylists/login");
    //             router.push("/admins/login");
    //         })
    //         .catch(err => console.log(err));
    // }

    
    return (
        <div className = {styles.container}>
            <nav className = {styles.navbar}>
                <h2>Athena Beauty Care</h2>
                <p>{user}</p>
                <button onClick = {() => setLogout(true)}>Logout</button>
            </nav>
            
            <main>{children}</main>
        </div>
    );
}


export default Layout;