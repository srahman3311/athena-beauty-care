// React Modules
import { useEffect, useState } from "react";
import axios from "axios";
import { addUpdateStylist } from "../../../libs/stylist-modifiers/addUpdateStylist";
import { times, daysOfTheWeek } from "../../../libs/data";

// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";
import imageUploadStyles from "../../../styles/ImageUpload.module.css";

// Children
import WorkScheduleForm from "./WorkScheduleForm";
import WorkScheduleList from "./WorkScheduleList";
import DropdownList from "../../reusable-components/DropdownList";
import Input from "../../reusable-components/Input";
import SaveButton from "../../reusable-components/SaveButton";
import ImagePreview from "../../reusable-components/ImagePreview";
import FileInput from "../../reusable-components/FileInput";



function AddStylist ({ 
    stylistInfo, 
    setStylistInfo, 
    showModal, 
    setShowModal, 
    setActionMessage, 
    setHappening, 
    workSchedules, 
    setWorkSchedules,
    imageUrl,
    stylistId 
}) {

   
    const [validationError, setValidationError] = useState(false); 
    const [file, setFile] = useState(null);
    

    
    function handleChange(event) {

        event.preventDefault();

        const { name, value } = event.target;

        setStylistInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            };
        });
    }


    async function addUpdateStylist(event) {

        event.preventDefault();

        const { firstName, lastName, username, email, password, password2 } = stylistInfo;
        

        if(!firstName || !lastName || !username || !email) return setValidationError(true);

        // Only validate passwords when a new stylist is being added. If updating a stylistInfo then no need to perform
        // password validations
        if(!stylistId) {

            if(!password || !password2) return setValidationError(true);
            if(password !== password2) return alert("Passwords didn't match");

        }

        if(!workSchedules.length) return alert("Please add at least one work schedule");


        // 
        const stylistData = new FormData();

        // To be able to send array and objects using FormData they must be stringified first. And at the backend 
        // they must parsed to have usability 
        stylistData.append("stylistInfo", JSON.stringify(stylistInfo));
        stylistData.append("file", file);
        stylistData.append("workSchedules", JSON.stringify(workSchedules));
        

        try {

            setActionMessage("Saving");

            // Default endpoint is add event
            let endpoint = "http://localhost:7070/api/stylists/add-stylist";

            // If stylistId is not empty string then update request should be sent and stylistId must be appended with
            // the FormData
            if (stylistId) {
                stylistData.append("_id", stylistId);
                endpoint = "http://localhost:7070/api/stylists/update"
            } 

            const response = await axios.post(endpoint, stylistData);

            if(response.status === 201) setShowModal(false);
            
            setActionMessage(response.data);

            
            
        } catch (error) {

            setActionMessage(error.response.data);

        } finally {

            setHappening("refetching afer adding");
        }
    }




    return (

        <div className={styles.add_stylist} style = {{display: showModal ? "block" : "none", width: "100%", height: "100%"}}>
            
            <div className="add_stylist_content" style = {{display: "flex", marginBottom: "30px"}}>
            
                <div className={styles.profile_picture} style={{width: "30%", backgroundColor: "#CCC"}}>
                    <div className={imageUploadStyles.image_uploader}>
                        <div className={imageUploadStyles.upload_container}>
                            <ImagePreview file = {file} imageUrl = {imageUrl} />
                            <FileInput file = {file} setFile = {setFile} />
                        </div>
                    </div>
                </div>

                <div className="stylists_content" style = {{width: "70%"}}>

                    
                    <div className="stylist_info">
                        <Input
                            type = "text"
                            label = "First Name"
                            name = "firstName"
                            value = {stylistInfo.firstName}
                            placeholder = "Athena"
                            onChange = {handleChange}
                            setData = {setStylistInfo}
                            error = {validationError}
                        />
                        <Input
                            type = "text"
                            label = "Last Name"
                            name = "lastName"
                            value = {stylistInfo.lastName}
                            placeholder = "Gorgeous"
                            onChange = {handleChange}
                            setData = {setStylistInfo}
                            error = {validationError}
                        />

                        <Input
                            type = "text"
                            label = "Username"
                            name = "username"
                            value = {stylistInfo.username}
                            placeholder = "Gorgeous"
                            onChange = {handleChange}
                            setData = {setStylistInfo}
                            error = {validationError}
                        />
                        <Input
                            type = "email"
                            label = "Email"
                            name = "email"
                            value = {stylistInfo.email}
                            placeholder = "athena@gmail.com"
                            onChange = {handleChange}
                            setData = {setStylistInfo}
                            error = {validationError}
                        />

                        {/* Hide the password input fields when user is trying to update just the stylistInfo */}
                        <div className="" style = {{display: stylistId ? "none" : "block"}}>
                            <Input
                                type = "password"
                                label = "Password"
                                name = "password"
                                value = {stylistInfo.password}
                                placeholder = ""
                                onChange = {handleChange}
                                setData = {setStylistInfo}
                                error = {validationError}
                            />
                            <Input
                                type = "password"
                                label = "Retype Password"
                                name = "password2"
                                value = {stylistInfo.password2}
                                placeholder = ""
                                onChange = {handleChange}
                                setData = {setStylistInfo}
                                error = {validationError}
                            />
                        </div>

                    </div>

                    <WorkScheduleForm 
                        workSchedules = {workSchedules} 
                        setWorkSchedules = {setWorkSchedules} 
                    />
                    <WorkScheduleList 
                        workSchedules = {workSchedules} 
                        setWorkSchedules = {setWorkSchedules} 
                    />
                
                </div>
            </div>

            <button onClick = {() => setShowModal(false)}>Cancel</button>
            <button value = {stylistId} onClick={addUpdateStylist}>Save</button>
          
        </div>
    );
}


export default AddStylist;