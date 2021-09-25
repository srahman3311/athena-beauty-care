import { useState, useEffect } from "react";

// Stylesheet
import styles from "../../../styles/NavigationBar.module.css";

// Components
import NavigationButton from "./NavigationButton";
import NavigationText from "./NavigationText";




export default function NavigationBar ({ activePage, setActivePage}) {

    const items = [
        {id: 1, content: "Category and Treatment"},
        {id: 2, content: "Select Location"},
        {id: 3, content: "Select Time / Date"},
        {id: 4, content: "Information / Payment"},
        {id: 5, content: "Confirmation"}
    ];
    
    const [windowWidth, setWindowWidth] = useState(0);

    if(typeof window !== "undefined") window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    useEffect(() => {
        setWindowWidth(window.innerWidth);

    }, []);


    return (
        <div className={styles.navigationBar_container}>
            <div className={styles.wrapper}>

                <div className={styles.navigation_bar}>
                    {items.map(item => {
                        return (
                            <NavigationButton
                                key = {item.id}
                                windowWidth = {windowWidth}
                                activePage = {activePage}
                                setActivePage = {setActivePage}
                                value = {item.id} 
                            />
                        );
                    })}
                </div>
            
                <div className={styles.navigationText_container}>
                    {items.map(item => {
                        return (
                            <NavigationText
                                key = {item.id}
                                windowWidth = {windowWidth}
                                text = {item.content} 
                            />
                        );
                    })}
                </div>

            </div>
        </div>

        
        
    );
    
}