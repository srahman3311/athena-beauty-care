// //
// import Link from "next/link"
import styles from "../../../styles/NavigationBar.module.css";



export default function NavigationButton ({ windowWidth, state, selectedTreatments, activePage, setActivePage, value }) {


    function changeActivePage(event) {

        const newValue = Number(event.target.textContent);

        if(newValue === 2 && !state.location) return alert("Please select a location");

        if(newValue === 3 && !selectedTreatments.length) return alert("Please select at least one treatment");

        setActivePage(newValue);
    }

    return (
        <div className={styles.navigation_links} style = {{width: value === 5 && (windowWidth <= 600 ? "50px" : "100px")}}>
            <div className={styles.button_container} style = {{width: value === 5 && "100%"}}>
                <button
                    style = {{backgroundColor: activePage === value && "darkblue"}}
                    className= {styles.navigationLink_button} 
                    value = {activePage} 
                    // onClick= {event => setActivePage(Number(event.target.textContent))}
                    onClick= {changeActivePage}
                >
                    {value}
                </button>
            </div>
            <div 
                className = {styles.blankPara_container} 
                style = {{display: value === 5 && "none"}}
            >
                <p></p>
            </div>
        
        </div>
    );
        
    
}
