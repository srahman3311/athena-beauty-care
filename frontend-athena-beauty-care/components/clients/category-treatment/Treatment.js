import { useState, useEffect } from "react";

// Stylesheet
import styles from "../../../styles/CategoryTreatment.module.css";
import clientGlobalStyles from "../../../styles/client-ui/ClientGlobals.module.css"

// Components
import EventHandlerDiv from "../client-reusable-components/EventHandlerDiv";



export default function Treatment ({ 
    item, 
    activeCategory, 
    activeTreatment, 
    changeActiveTreatment, 
    selectedTreatments, 
    addTreatment,
    selectTreatment,
    treatments 
}) {

    

    // console.log(selectedTreatments.some(xxx => xxx.description === "abc" && xxx.category === "bbc"));

    


    return (
        <div 
            className={styles.treatmentItem_container} 
            style = {{
                display: activeCategory === item.category ? "block" : "none",
            }}
        >
            {/* <EventHandlerDiv 
                content = {`${item.title}, ${item.duration}, ${item.price}`} 
                clickEventHandler = {changeActiveTreatment} 
            /> */}
            <div className={clientGlobalStyles.eventHandler_div} onClick = {event => selectTreatment(event, treatments)}>
                {item.title}
            </div>



            {/* <div className={styles.stylists} style = {{display: item.title === activeTreatment ? "block" : "none"}}>
                <p>Select a stylist</p>
                <ul className={styles.stylist_list} >
                    <li className={styles.stylistList_item} onClick = {e => addTreatment(e.target.textContent, item)}></li>
                    {item.stylists.map((stylist, index) => {
                        return (
                            <li
                                key = {index + 1}
                                className={styles.stylistList_item} 
                                style = {{
                                    backgroundColor: selectedTreatments.some(
                                        newItem => newItem.choosenStylist === stylist && newItem.treatmentTitle === item.title
                                        ) && "blue"
                                }}
                                onClick = {e => addTreatment(e.target.textContent, item)}
                            >
                                {stylist}
                            </li>
                        );
                    })}
                </ul>
            </div> */}



            <div 
                className={styles.treatment_item} 
                style = {{
                    backgroundImage: activeTreatment === item.title 
                    ? 
                    "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" 
                    :
                    selectedTreatments.some(
                        x => x.title === item.title
                    ) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
                }}
            >
                <div className={styles.treatmentItem_content}>
                    <p>{item.title} ({item.duration} minutes)</p>
                    <p>${item.price}</p>
                </div>
                <p
                    style = {{display: !item.description && "none"}} 
                    className={styles.treatment_content}
                >
                    {item.description}
                </p>
            </div>
        </div>
    );
    
}