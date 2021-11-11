import { useState, useEffect } from "react";
import axios from "axios";

// Stylesheet
import styles from "../../../styles/CategoryTreatment.module.css";

// Components
import Category from "./Category";
import Treatment from "./Treatment";
import ItemHeader from "../client-reusable-components/ItemHeader";




export default function CategoryTreatment ({ 
    activePage, activeCategory, changeActiveCategory, activeTreatment, changeActiveTreatment, selectedTreatments, addTreatment 
}) {

    const [categories, setCategories] = useState([]);
    const [treatments, setTreatments] = useState([]);
    
    
    

    useEffect(async () => {

        try {

            const response = await axios.get("http://localhost:7070/api/categories");

            setCategories(response.data.categories);

            try {

                const newResponse = await axios.get("http://localhost:7070/api/treatments");
                setTreatments(newResponse.data.treatments);


            } catch(error) {
                console.log(error.response.data.msg);
            }

        } catch(error) {
            console.log(error.response.data.msg);
        }
        
    }, [])

    // console.log(treatments);

    function addNewTreatment(stylist, treatment) {
        console.log(stylist);
        console.log(treatment)
    }

   
   
    return (
        <div className={styles.category_treatment} style = {{display: activePage === 2 ? "block" : "none"}}>
            <div className={styles.category}>
                {/* <h4 className={styles.header}>Select the Category</h4> */}
                <ItemHeader content = "Select category"/>

                <div className={styles.categoryItem_list}>
                    {categories.map((item, index) => {
                        return (
                            <Category 
                                key = {index + 1} 
                                item = {item} 
                                index = {index}
                                activeCategory = {activeCategory}
                                changeActiveCategory = {changeActiveCategory} 
                                selectedTreatments = {selectedTreatments}
                            />
                        );
                    })}
                </div>
            </div>


            <div className={styles.treatment}>
                <ItemHeader content = "Select treatment"/>

                <div className={styles.treatmentItem_list}>
                    {treatments.map((item, index) => {
                        return (
                            <Treatment 
                                key = {index + 1} 
                                item = {item} 
                                activeCategory = {activeCategory}
                                activeTreatment = {activeTreatment}
                                changeActiveTreatment = {changeActiveTreatment}
                                selectedTreatments = {selectedTreatments}
                                addTreatment = {addTreatment}
                            />
                            
                        );
                    })}
                </div>

            </div>

            {/* <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1><h1>Hello</h1>
            <h1>Hello</h1> */}
            
        </div>
        
    );
    
}