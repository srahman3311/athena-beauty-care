// React Modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../../libs/useAxios";
import { addUpdateStylist } from "../../libs/stylist-modifiers/addUpdateStylist";
import { times, daysOfTheWeek, stylistDataTableHeaders } from "../../libs/data";

// Stylesheet
import styles from "../../styles/stylists/Stylists.module.css";

// Children
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
import DataTable from "../../components/reusable-components/data-table/DataTable";
import DropdownList from "../../components/reusable-components/DropdownList";
import Input from "../../components/reusable-components/Input";
import SaveButton from "../../components/reusable-components/SaveButton";
import AddStylist from "../../components/admins/stylists/AddStylist";
import SearchInput from "../../components/reusable-components/SearchInput";
import Message from "../../components/reusable-components/Message";
import NextPrevItems from "../../components/reusable-components/NextPrevItems";
import NextPrevView from "../../components/reusable-components/NextPrevView";


export default function Stylists () {

    const [happening, setHappening] = useState("Fetching");
    const [actionMessage, setActionMessage] = useState(null);
    const [stylistState, setStylistState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    })

    //Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/stylists";
    const requestBody = { searchText: stylistState.searchText, skip: stylistState.skip, limit: stylistState.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody, happening);

    const [isAddingUpdating, setIsAddingUpdating] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [stylists, setStylists] = useState([]);
    const [stylistTableData, setStylistTableData] = useState([]);
    const [stylistInfo, setStylistInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: ""
    });
    const [workSchedules, setWorkSchedules] = useState([]);
    
   

    useEffect(() => {

        setHappening("fetching");
        
        const newData = [];

        if(data !== null) {

            setStylists(data);

            data.forEach((stylist, index) => {
                newData.push({
                    id: index + 1,
                    data: [
                        stylist.firstName, 
                        stylist.lastName,
                        stylist.username, 
                        stylist.email, 
                        stylist.status,
                        `http://localhost:3000/stylists/${stylist._id.toString()}`
                    ]
                });
            });
        }

        setStylistTableData(newData);

        setStylistState(currentValue => {
            return {
                ...currentValue,
                dataLength: totalDataCount
            };
        });

        

    }, [data, happening])



    function fetchNextPrevItems(event) {

        const newSkip = Number(event.target.value);

        setStylistState(currentValue => {

            return {
                ...currentValue,
                skip: newSkip
            };
        });

        setHappening("refetching after next button clicked");

    }
    

    return (

        <div className={styles.stylists} style = {{position: "relative", overflow: "hidden"}}>
            <ControlPanel />

            <div className="stylist_content" style = {{width: "100%"}}>
               
                <div className="table_and_form">

                    <div className="table" style = {{display: showModal ? "none" : "block", width: "100%", height: "100%"}}>
                        <div className="search_add">
                            <SearchInput
                                value = {stylistState.searchText}
                                setState = {setStylistState}
                                setHappening = {setHappening}
                            />

                            {/* <button onClick = {() => setIsAddingUpdating(true)}>Add event</button> */}
                        </div>
                        <button onClick = {() => setShowModal(true)}>Add Stylist</button>  
                        <DataTable
                            tableHeaders = {stylistDataTableHeaders} 
                            tableData = {stylistTableData}
                        />
                        <NextPrevItems 
                            state = {stylistState} 
                            setState = {setStylistState} 
                            fetchNextPrevItems = {fetchNextPrevItems}
                        />
                        <NextPrevView state = {stylistState} />
                    </div>

                    <AddStylist
                        imageUrl = ""
                        stylistId = ""
                        stylistInfo = {stylistInfo}
                        setStylistInfo = {setStylistInfo} 
                        workSchedules={workSchedules}
                        setWorkSchedules={setWorkSchedules}
                        showModal = {showModal} 
                        setShowModal = {setShowModal}
                        setActionMessage = {setActionMessage} 
                        setHappening = {setHappening}
                    />
                  
                </div>
           

              
                
            </div>
          
            <Message 
                message = {actionMessage} 
                setActionMessage = {setActionMessage}
            />
           
        </div>
    );
}