import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../../../libs/useAxios";
// Stylesheet
import styles from "../../../styles/CategoryTreatment.module.css";

// Components
import Category from "./category/Category";
import Treatment from "./Treatment";
import ItemHeader from "../client-reusable-components/ItemHeader";




export default function CategoryTreatment ({ 
    activePage, 
    activeCategory, 
    changeActiveCategory, 
    activeTreatment, 
    changeActiveTreatment, 
    selectedTreatments,
    addTreatment 
}) {

    const {
        data: categoryData, error: categoryDataFetchingError, loading: categoryDataLoading
    } = useAxios("get", "http://localhost:7070/api/categories", {});
    const {
        data: treatmentData, error: treatmentDataFetchingError, loading: treatmentDataLoading
    } = useAxios("get", "http://localhost:7070/api/treatments", {})

    const [categories, setCategories] = useState([]);
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {

        if(categoryData !== null) setCategories(categoryData);
        if(treatmentData !== null) setTreatments(treatmentData);

    }, [categoryData, treatmentData])



    
    

    function addNewTreatment(stylist, treatment) {
        console.log(stylist);
        console.log(treatment)
    }

   
    // if(categoryDataLoading || treatmentDataLoading) {
    //     return (<div>Loading....</div>);
    // }

    if(categoryDataFetchingError || treatmentDataFetchingError) {
        return (<div>Something went wrong</div>);
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
            
        </div>
        
    );
    
}