

import useAxios from "../../libs/useAxios";
import axios from "axios";
import { treatmentDataTableHeaders } from "../../libs/data";


// React Modules
import { useEffect, useState } from "react";
import AddTreatment from "../../components/admins/treatment/AddTreatment";

// Stylesheet
import styles from "../../styles/treatments/Treatment.module.css"

// components

// Table Components


// Other Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import SearchInput from "../../components/reusable-components/SearchInput";
import Loading from "../../components/reusable-components/Loading";
import DataTable from "../../components/reusable-components/data-table/DataTable";
import TreatmentDetails from "../../components/admins/treatment/TreatmentDetails";
import Message from "../../components/reusable-components/Message";
import DeletePrompt from "../../components/reusable-components/DeletePrompt";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import NextPrevView from "../../components/reusable-components/NextPrevView";



export default function Treatment () {

    const [happening, setHappening] = useState("Fetching");
    const [treatmentState, setTreatmentState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    })

    // Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/treatments";
    const requestBody = { searchText: treatmentState.searchText, skip: treatmentState.skip, limit: treatmentState.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody, happening);
    const { 
        data: categoryData, 
        error: categoryDataFetchingError, 
        loading: categoryDataFetchingLoading 
    } = useAxios("get", "http://localhost:7070/api/categories", {}, happening);
    const { 
        data: stylistData, 
        error: stylistDataFetchingError, 
        loading: stylistDataFetchingLoading 
    } = useAxios("get", "http://localhost:7070/api/stylists", {}, happening);

    const [actionMessage, setActionMessage] = useState(null);
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [treatmentIdForDeleting, setTreatmentIdForDeleting] = useState("");
    const [itemNameForDeletePrompt, setItemNameForDeletePrompt] = useState("");
    const [treatmentTableData, setTreatmentTableData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [stylists, setStylists] = useState([]);
    const [treatments, setTreatments] = useState([]);
    const [treatmentId, setTreatmentId] = useState("");
    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [treatmentInfo, setTreatmentInfo] = useState({
        treatmentId: "",
        category: "",
        title: "",
        description: "",
        duration: "",
        price: "",
        stylists: [],
        remarks: ""
    });
    

 
    useEffect(() => {

        setHappening("fetching");

        if(data !== null) {

            setTreatments(data);

            const newData = [];

            data.forEach((treatment, index) => {

                newData.push({
                    id: index + 1,
                    data: [
                        treatment.category,
                        treatment.title,
                        treatment.description,
                        treatment.duration,
                        treatment.price,
                        treatment.remarks,
                        // treatment.remarks ? treatment.remarks : "N/A",
                        `View Details-${treatment._id.toString()}`,
                        `Delete-${treatment._id.toString()}`
                    ]

                });

            });

            setTreatmentTableData(newData);

            setTreatmentState(currentValue => {
                return {
                    ...currentValue,
                    dataLength: totalDataCount
                };
            });

        }

        if(categoryData !== null) setCategories(categoryData);
        if(stylistData !== null) setStylists(stylistData);


    }, [data, categoryData, stylistData, happening]);

  
    function openAddTreatmentModal(event) {

        const index = Number(event.target.value);

        setTreatmentInfo({
            treatmentId: treatments[index]._id.toString(),
            category: treatments[index].category,
            title: treatments[index].title,
            description: treatments[index].description,
            duration: treatments[index].duration,
            price: treatments[index].price,
            remarks: treatments[index].remarks,
            stylists: treatments[index].stylists
        });

        setTreatmentId("");
        setIsAddingUpdating(true);
    }

    function openDeletePrompt (event) {

        const _id = event.target.value;

        setTreatmentIdForDeleting(_id);

        for(let x = 0; x < treatments.length; x++) {

            if(_id === treatments[x]._id.toString()) {
                setItemNameForDeletePrompt(treatments[x].title);
                break;
            }
        }

        setShowDeletePrompt(true);
    }


    async function addUpdateTreatment (event) {


        event.preventDefault();

        // For updating purpose
        const _id = event.target.value;
        console.log(_id);

        const { category, title, description, duration, price, stylists } = treatmentInfo;

        // Form validation
        if(!category) return alert("Please select a category");

        if(!title || !description || !duration || !price) return setValidationError(true);

        if(!stylists.length) return alert("Please associate at least one stylist with this treatment");

      
        setIsAddingUpdating(false);

        try {

            setActionMessage("Saving");

            let endpoint = "http://localhost:7070/api/treatments/add-treatment";

            if(_id) endpoint = "http://localhost:7070/api/treatments/update";
              
            const response = await axios.post(endpoint, treatmentInfo);

            setActionMessage(response.data);
            

        } catch (error) {

            setActionMessage(error.response.data);

        } finally {

            setTreatmentInfo({
                treatmentId: "",
                category: "",
                title: "",
                description: "",
                duration: "",
                price: "",
                stylists: [],
                remarks: ""
            });

            setHappening("refetching afer adding/updating");
        }

    }

    function fetchNextPrevItems(event) {

        const newSkip = Number(event.target.value);

        setTreatmentState(currentValue => {

            return {
                ...currentValue,
                skip: newSkip
            };
        });

        setHappening("refetching after next button clicked");

    }

 
    
    return (
        <div className={styles.treatments} style={{display: "flex"}}>

            <ControlPanel />

            <div className="treatments_content" style = {{width: "80%"}}>

                <AddTreatment
                    // For input field values
                    treatmentInfo = {treatmentInfo}
                    setTreamentInfo = {setTreatmentInfo}
                    // if true, isAddingUpdating will display the form and will hide if false
                    isAddingUpdating = {isAddingUpdating}
                    // Clicking on close button will invoke this function 
                    addUpdateTreatment = {addUpdateTreatment}
                    // Following attributes will be passed to the displayHideTreatmentForm function as arguments for
                    // updating the states on close button click event. isAddingUpdating will be set to false,
                    // setTreatmentInfo will update the treatmentInfo state with it's initial empty values   
                    setTreatmentInfo = {setTreatmentInfo}
                    setIsAddingUpdating = {setIsAddingUpdating}
                    validationError = {validationError}
                    stylists = {stylists}
                    categories = {categories}
                />

                <div className="search_add">
                    <SearchInput
                        value = {treatmentState.searchText}
                        setState = {setTreatmentState}
                        setHappening = {setHappening}
                    />

                    <button onClick = {() => setIsAddingUpdating(true)}>Add Treatment</button>
                </div>

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
                            tableHeaders = {treatmentDataTableHeaders} 
                            tableData = {treatmentTableData}
                            setItemId = {setTreatmentId}
                            openDeletePrompt = {openDeletePrompt}
                        />
                    }
                </div>
                <TreatmentDetails
                    treatments = {treatments}
                    treatmentId = {treatmentId} 
                    setTreatmentId = {setTreatmentId}
                    openAddTreatmentModal = {openAddTreatmentModal}
                />

                <NextPrevItems 
                    state = {treatmentState} 
                    setState = {setTreatmentState} 
                    fetchNextPrevItems = {fetchNextPrevItems}
                />
                <NextPrevView state = {treatmentState} />
                <DeletePrompt
                    itemId = {treatmentIdForDeleting}
                    itemNameForDeletePrompt = {itemNameForDeletePrompt} 
                    showDeletePrompt = {showDeletePrompt} 
                    setShowDeletePrompt = {setShowDeletePrompt} 
                    endpoint = "http://localhost:7070/api/treatments/delete"
                    setActionMessage = {setActionMessage}
                    setHappening = {setHappening}
                />

               
             

                
            </div>

            <Message 
                message = {actionMessage} 
                setActionMessage = {setActionMessage}
            />

        </div>
    );
}