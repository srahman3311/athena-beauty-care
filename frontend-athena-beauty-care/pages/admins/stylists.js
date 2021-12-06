// React Modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../../libs/useAxios";
import { addWorkSchedule } from "../../libs/stylist-modifiers/addWorkSchedule";
import { removeWorkSchedule } from "../../libs/stylist-modifiers/removeWorkSchedule";
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


export default function Stylists () {

    const [state, setState] = useState({
        searchText: "",
        skip: 0,
        limit: 20,
        dataLength: 0
    })

    //Custom hook call to fetch data
    const endpoint = "http://localhost:7070/api/stylists";
    const requestBody = { searchText: state.searchText, skip: state.skip, limit: state.limit };
    const { data, totalDataCount, error, loading } = useAxios("post", endpoint, requestBody);


    const [showModal, setShowModal] = useState(false);
    const [stylists, setStylists] = useState([]);
    const [stylistInfo, setStylistInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    });
   
    const [addedWorkSchedules, setAddedWorkSchedules] = useState([]);


    useEffect(() => {
        
        const newData = [];

        if(data !== null) {

            data.forEach((stylist, index) => {
                newData.push({
                    id: index + 1,
                    data: [
                        stylist.firstName, 
                        stylist.lastName, 
                        stylist.email, 
                        stylist.status,
                        `http://localhost:3000/stylists/${stylist._id.toString()}`
                    ]
                });
            });
        }

        setStylists(newData);

    }, [data, state.searchText, state.skip, state.limit])

    return (

        <div className={styles.stylists}>
            <ControlPanel />

            <div className="table" style = {{display: showModal ? "none" : "block", width: "100%", height: "100%"}}>
                <button onClick = {() => setShowModal(true)}>Add Stylist</button>  
                <DataTable
                    tableHeaders = {stylistDataTableHeaders} 
                    tableData = {stylists}
                />
            </div>

            <AddStylist 
                showModal = {showModal} 
                setShowModal = {setShowModal}
                stylistInfo = {stylistInfo} 
                setStylistInfo = {setStylistInfo} 
            />

             
                
           
        </div>
    );
}