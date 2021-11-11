// Modifier functions


import { fetchCategoryData } from "../../libs/category-modifiers/fetchCategoryData";
import { searchCategories } from "../../libs/category-modifiers/searchCategories";
import { displayHideCategoryForm } from "../../libs/category-modifiers/displayHideCategoryForm";
import { deleteCategory } from "../../libs/category-modifiers/deleteCategory";


// React Modules
import { useEffect, useState } from "react";

// Stylesheet
import styles from "../../styles/locations/Location.module.css";

// components

// Table Components
import ItemTableHeader from "../../components/reusable-components/item-table/ItemTableHeader";
import ItemTableData from "../../components/reusable-components/item-table/ItemTableData";

// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import AddCategory from "../../components/admins/category/AddCategory";
import DisplayFormButton from "../../components/reusable-components/DisplayFormButton";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import ItemDetailsModal from "../../components/reusable-components/item-details/ItemDetailsModal";
import SearchInput from "../../components/reusable-components/SearchInput";



export default function Category () {

    const categoryHeaders = ["_id", "Title", "Action", "__v", "Delete"];

    const [categoryId, setCategoryId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    // const [display]
    const [categoryInfo, setCategoryInfo] = useState({ categoryId: "", title: "" });
    const [state, setState] = useState({
        categories: [],
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    })

 
    useEffect(() => {

        fetchCategoryData(state, state.skip, setState);

    }, []);

    
    return (
        <div className={styles.categories} style={{display: "flex"}}>

            <ControlPanel />

            <div className="category_content" style = {{width: "80%"}}>

                <AddCategory
                    // For input field values
                    categoryInfo = {categoryInfo}
                    // if true, isAddingUpdating will display the form and will hide if false
                    isAddingUpdating = {isAddingUpdating}
                    // Clicking on close button will invoke this function 
                    displayHideCategoryForm = {displayHideCategoryForm}
                    // Following attributes will be passed to the displayHideCategoryForm function as arguments for
                    // updating the states on close button click event. isAddingUpdating will be set to false,
                    // setLocationInfo will update the locationInfo state with it's initial empty values   
                    setCategoryInfo = {setCategoryInfo}
                    setIsAddingUpdating = {setIsAddingUpdating}
                />

             
                <div className="search_add">
                    <SearchInput
                        state = {state}
                        setState = {setState}
                        searchData = {searchCategories} 
                    />
                    <DisplayFormButton
                        text = "Add Category" 
                        displayHideForm = {displayHideCategoryForm}
                        setIsAddingUpdating = {setIsAddingUpdating} 
                    />
                </div>

                {/* Styles are in global css */}
                <div className="data-table">
                    <table>
                        <ItemTableHeader itemHeaders = {categoryHeaders} />
                        <ItemTableData 
                            items = {state.categories}
                            setItemId = {setCategoryId}
                            isAddingUpdating = {isAddingUpdating}
                            state = {state} 
                            setState = {setState}
                            deleteItem = {deleteCategory}
                        />
                    </table>
                </div>

                <NextPrevItems state = {state} setState = {setState} />

                {/* Styles are in globals.css */}
                <ItemDetailsModal
                    itemId = {categoryId}
                    setItemId = {setCategoryId}
                    items = {state.categories}
                    itemHeaders = {categoryHeaders} 
                    setItemInfo = {setCategoryInfo}
                    // For displaying location add/update form
                    isAddingUpdating = {isAddingUpdating}
                    setIsAddingUpdating = {setIsAddingUpdating}
                    // Add and update forms are same but need to populate the form's input fields with the data for updating
                    displayHideForm = {displayHideCategoryForm}
                />
                
            </div>

        </div>
    );
}