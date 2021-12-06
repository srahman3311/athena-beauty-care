// Modifier functions
import { categoryDataTableHeaders } from "../../libs/data";

import { fetchCategoryData } from "../../libs/category-modifiers/fetchCategoryData";
import { searchCategories } from "../../libs/category-modifiers/searchCategories";
import { displayHideCategoryForm } from "../../libs/category-modifiers/displayHideCategoryForm";
import { deleteCategory } from "../../libs/category-modifiers/deleteCategory";
import useAxios from "../../libs/useAxios";
import axios from "axios";


// React Modules
import { useEffect, useState } from "react";

// Stylesheet
import styles from "../../styles/category/Category.module.css";

// components

// Table Components
import ItemTableHeader from "../../components/reusable-components/item-table/ItemTableHeader";
import ItemTableData from "../../components/reusable-components/item-table/ItemTableData";
import DataTable from "../../components/reusable-components/data-table/DataTable";

// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import AddCategory from "../../components/admins/category/AddCategory";

import SearchInput from "../../components/reusable-components/SearchInput";
import Loading from "../../components/reusable-components/Loading";
import DeletePrompt from "../../components/reusable-components/DeletePrompt";
import CategoryDetails from "../../components/admins/category/CategoryDetails";
import Message from "../../components/reusable-components/Message";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import NextPrevView from "../../components/reusable-components/NextPrevView";



export default function Category () {

    const categoryHeaders = ["_id", "Title", "Action", "__v", "Delete"];

    const [happening, setHappening] = useState("Fetching");
    const [categoryState, setCategoryState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    });

    // Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/categories";
    const requestBody = { searchText: categoryState.searchText, skip: categoryState.skip, limit: categoryState.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody, happening);


    const [actionMessage, setActionMessage] = useState(null);
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [itemNameForDeletePrompt, setItemNameForDeletePrompt] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryTableData, setCategoryTableData] = useState([]);

    // This categoryId will be used to open the details of the category. 
    const [categoryId, setCategoryId] = useState("");
    const [categoryIdForDeleting, setCategoryIdForDeleting] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    // const [display]
    const [categoryInfo, setCategoryInfo] = useState({ categoryId: "", title: "" });

 
    useEffect(() => {

        setHappening("fetching");

        if(data !== null) {

            setCategories(data);

            const newData = [];

            data.forEach((category, index) => {

                newData.push({
                    id: index + 1,
                    data: [
                        category.title,
                        // View Details and Delete button's values will be the id of the category which will be used
                        // to open the details modal and delete prompt
                        `View Details-${category._id.toString()}`,
                        `Delete-${category._id.toString()}`
                    ]

                });

            });

            setCategoryTableData(newData);


            setCategoryState(currentValue => {
                return {
                    ...currentValue,
                    dataLength: totalDataCount
                };
            });

        }

    }, [data, happening]);


    function openDeletePrompt (event) {

        const _id = event.target.value;

        setCategoryIdForDeleting(_id);

        for(let x = 0; x < categories.length; x++) {

            if(_id === categories[x]._id.toString()) {
                setItemNameForDeletePrompt(categories[x].title);
                break;
            }
        }

        setShowDeletePrompt(true);
    }


    function openAddCategoryModal(event) {

        // category details modal's update button's value has been set with the index of the category. Use this value
        // to update the categoryInfo's properties
        const index = Number(event.target.value);

        setCategoryInfo({
            categoryId: categories[index]._id.toString(),
            title: categories[index].title
        });

        setCategoryId("");
        setIsAddingUpdating(true);
    }


    async function addUpdateCategory (event) {

        event.preventDefault();

        // For updating purpose
        const _id = event.target.value;
        //return console.log(_id, categoryInfo);

        // Form validation
        if (!categoryInfo.title) return setValidationError(true);

        setIsAddingUpdating(false);

        try {

            setActionMessage("Saving");

            let endpoint = "http://localhost:7070/api/categories/add-category";

            if(_id) endpoint = "http://localhost:7070/api/categories/update";
              
            const response = await axios.post(endpoint, categoryInfo);

            setActionMessage(response.data);
            

        } catch (error) {

            setActionMessage(error.response.data);

        } finally {

            setCategoryInfo({ locationId: "", title: "" });

            setHappening("refetching afer adding/updating");
        }

    }

    function fetchNextPrevItems(event) {

        const newSkip = Number(event.target.value);

        setCategoryState(currentValue => {

            return {
                ...currentValue,
                skip: newSkip
            };
        });

        setHappening("refetching after next button clicked");

    }



    

   
    
    
    async function deleteCategory(event) {

        const _id = event.target.value; 

        setShowDeletePrompt(false);
        

        try {

            setActionMessage("Deleting");

            const response = await axios.post("http://localhost:7070/api/categories/delete", { _id });

            setActionMessage(response.data.msg);

        } catch(error) {

            console.log(error);

        } finally {

            setHappening("re-fetching");
        }

    }




    
    return (
        <div className={styles.categories} style={{display: "flex"}}>

            <ControlPanel />

            <div className="category_content" style = {{width: "80%"}}>

                <AddCategory
                    // For input field values
                    categoryInfo = {categoryInfo}
                    // if true, isAddingUpdating will display the form and will hide if false
                    isAddingUpdating = {isAddingUpdating}
                    addUpdateCategory = {addUpdateCategory}
                    // Following attributes will be passed to the displayHideCategoryForm function as arguments for
                    // updating the states on close button click event. isAddingUpdating will be set to false,
                    // setLocationInfo will update the locationInfo state with it's initial empty values   
                    setCategoryInfo = {setCategoryInfo}
                    setIsAddingUpdating = {setIsAddingUpdating}
                />

             
                <div className="search_add">
                    <SearchInput
                        value = {categoryState.searchText}
                        setState = {setCategoryState}
                        setHappening = {setHappening}
                    />

                    <button onClick = {() => setIsAddingUpdating(true)}>Add Category</button>
                </div>

                {/* Styles are in global css */}
                <div className="table" >
                    {
                        error 
                        ?
                        <div>Something went wrong</div> 
                        :
                        loading
                        ?
                        <Loading />
                        :
                        <DataTable
                            tableHeaders = {categoryDataTableHeaders} 
                            tableData = {categoryTableData}
                            setItemId = {setCategoryId}
                            openDeletePrompt = {openDeletePrompt}
                        />
                    }
                </div>
             


                
                <DeletePrompt
                    deleting = {deleting}
                    itemId = {categoryIdForDeleting}
                    itemNameForDeletePrompt = {itemNameForDeletePrompt} 
                    showDeletePrompt = {showDeletePrompt} 
                    setShowDeletePrompt = {setShowDeletePrompt} 
                    deleteItem = {deleteCategory}
                />

                

                <CategoryDetails
                    categories = {categories}
                    categoryId = {categoryId}
                    setCategoryId = {setCategoryId} 
                    // Clicking on thw update button will call this function to open the AddCategory Modal
                    openAddCategoryModal = {openAddCategoryModal}
                />

                <NextPrevItems 
                    state = {categoryState} 
                    setState = {setCategoryState} 
                    fetchNextPrevItems = {fetchNextPrevItems}
                />
                <NextPrevView state = {categoryState} />
                
            </div>

            <Message 
                message = {actionMessage} 
                setActionMessage = {setActionMessage}
            />

        </div>
    );
}