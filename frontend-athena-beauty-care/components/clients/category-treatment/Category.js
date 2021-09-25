import { useState, useEffect } from "react";

// Stylesheet
import styles from "../../../styles/CategoryTreatment.module.css";

// Components




export default function Category ({ item, index, activeCategory, changeActiveCategory, selectedTreatments }) {



    return (
        <div className={styles.categoryItem_container}>
            <div className={styles.categoryTreatment_hiddenDiv} onClick = {changeActiveCategory}>
                {item.title}
            </div>
            <div className={styles.category_item}>
                <div 
                    className={styles.categoryItem_content}
                    style = {{
                        backgroundImage: activeCategory === item.title 
                        ? 
                        "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" 
                        :
                        selectedTreatments.some(x => x.category === item.title) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
                    }}
                >
                    <span 
                        style = {{
                            backgroundColor: activeCategory === item.title && "white",
                            color: activeCategory === item.title && "black"
                        }}
                    >
                        {index + 1}
                    </span>
                    <p style = {{ color: activeCategory === item.title && "white" }}>{item.title}</p>
                </div>
            </div>
        </div>
    );
    
}