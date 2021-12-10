//React & Other Modules
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";




// Components
import ControlPanel from "../../components/admins/control-panel/ControlPanel"
import ProfilePicture from "../../components/reusable-components/profile/ProfilePicture";
import NameTitle from "../../components/reusable-components/profile/NameTitle";
import DataTable from "../../components/reusable-components/data-table/DataTable";
import SectionHeader from "../../components/reusable-components/SectionHeader";
import IndividualInfo from "../../components/reusable-components/profile/IndividualInfo";
import AddStylist from "../../components/admins/stylists/AddStylist";
import Message from "../../components/reusable-components/Message";
import Input from "../../components/reusable-components/Input";

// Stylesheet
import styles from "../../styles/stylists/Stylists.module.css";







export default function Stylist () {

    const imageSrc = "https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png";

    const router = useRouter();

    const { stylistId } = router.query;
    
    const [happening, setHappening] = useState("Fetching");
    const [actionMessage, setActionMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
    const [passwordInfo, setPasswordInfo] = useState({
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
    });
    const [validationError, setValidationError] = useState(false);
    const [stylistInfo, setStylistInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: ""
    });
    const [workSchedules, setWorkSchedules] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [stylist, setStylist] = useState(null);
    const [stylistTableData, setStylistTableData] = useState([]);



    useEffect(() => {

        setHappening("Fetchin");

        async function fetchData() {
         

            if(stylistId) {

                try {

                    setLoading(true);

                    const response = await axios.get("http://localhost:7070/api/stylists/" + stylistId);

                    console.log(response.data);

                    setStylist(response.data);
                    setStylistInfo(currentValue => {
                        return {
                            ...currentValue,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            username: response.data.username,
                            email: response.data.email
                        }
                    });
                    setWorkSchedules(response.data.workSchedule);

                    const newData = [];

                    response.data.workSchedule.forEach((schedule, index) => {
                        newData.push({
                            id: index + 1,
                            data: [
                                schedule.location, 
                                schedule.day, 
                                schedule.startTime, 
                                schedule.endTime
                            ]
                        });
                    });
        
                    setStylistTableData(newData);
                        

                } catch (error) {

                    setError(error);

                } finally {

                    setLoading(false);
                }
            }

        }

        fetchData();
       
    }, [router.isReady, happening])


    function passwordHandleChange(event) {

        const { name, value } = event.target;

        setPasswordInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            };
        });
    }



    async function changePassword(event) {

        event.preventDefault();

        const { oldPassword, newPassword, newPassword2 } = passwordInfo;

        if(!oldPassword || !newPassword || !newPassword2) return setValidationError(true);

        if(newPassword !== newPassword2) return alert("New passwords didn't match");


        try {

            setActionMessage("Updating");

            let endpoint = "http://localhost:7070/api/stylists/change-password";

            const response = await axios.post(endpoint, { _id: stylistId, passwordInfo });

            if(response.status === 201) setShowPasswordChangeModal(false);
            
            setActionMessage(response.data);

            
        } catch (error) {

            setActionMessage(error.response.data);

        } finally {

            setPasswordInfo({
                oldPassword: "",
                newPassword: "",
                newPassword2: ""
            });

            setHappening("refetching afer adding");
        }


    }

    

    if(loading) return <div>Loading....</div>

    if(stylist !== null) {

        return (
            <div className={styles.stylist_profile}>

                <ControlPanel />
                <div className={styles.stylistProfile_content} style = {{display: showModal ? "none" : "flex"}}>
                    <button onClick={() => setShowModal(true)}>Update</button>

                    <button onClick={() => setShowPasswordChangeModal(true)}>Change Password</button>


                    <div className={styles.stylist_summary}>
                        <ProfilePicture 
                            imageSrc = {stylist.imageUrl !== "undefined" ? stylist.imageUrl : imageSrc} 
                        />
                        <NameTitle name = {`${stylist.firstName} ${stylist.lastName}`}  />
                        <p>Head Stylist</p>
                        <button>View Calendar</button>
                    </div>
                    <div className={styles.stylist_details}>

                        <div className={styles.general_info}>
                            <SectionHeader content = "General Information" />
                            <div className={styles.generalInfo_content}>
                                <IndividualInfo infoTitle = "First Name" info = {stylist.firstName} />
                                <IndividualInfo infoTitle = "Last Name" info = {stylist.lastName} />
                                <IndividualInfo infoTitle = "Email" info = {stylist.email} />
                                <IndividualInfo infoTitle = "Phone" info = "+8801717062884" />
                            </div>
                            
                            
                        </div>

                        <div className={styles.workSchedule_table}>
                            <SectionHeader content = "Work Schedule" />
                            <DataTable
                                tableHeaders = {["Location", "Day", "Start Time", "End Time"]}
                                tableData = {stylistTableData} 
                                dynamicClass = "workSchedule_table"
                            />

                        </div>

                     

                    </div>
                </div>

                <AddStylist 
                    stylistInfo = {stylistInfo}
                    setStylistInfo = {setStylistInfo}
                    workSchedules={workSchedules}
                    setWorkSchedules={setWorkSchedules}
                    showModal = {showModal} 
                    setShowModal = {setShowModal}
                    setActionMessage = {setActionMessage} 
                    setHappening = {setHappening}
                    imageUrl = {stylist.imageUrl}
                    stylistId = {stylist._id.toString()}
                />

                {/* styles are in globals.css */}
                <div className="password_change_modal" style = {{display: showPasswordChangeModal ? "block" : "none"}}>

                    <Input
                        type = "password"
                        label = "Old Password"
                        name = "oldPassword"
                        value = {passwordInfo.oldPassword}
                        placeholder = ""
                        onChange = {passwordHandleChange}
                        setData = {setPasswordInfo}
                        error = {validationError}
                    />
                    <Input
                        type = "password"
                        label = "New Password"
                        name = "newPassword"
                        value = {passwordInfo.newPassword}
                        placeholder = ""
                        onChange = {passwordHandleChange}
                        setData = {setPasswordInfo}
                        error = {validationError}
                    />
                    <Input
                        type = "password"
                        label = "Retype New Password"
                        name = "newPassword2"
                        value = {passwordInfo.newPassword2}
                        placeholder = ""
                        onChange = {passwordHandleChange}
                        setData = {setPasswordInfo}
                        error = {validationError}
                    />

                    <button onClick={changePassword}>Update Password</button>
                    <button onClick={() => setShowPasswordChangeModal(false)}>Close</button>

                </div>
                
                <Message 
                    message = {actionMessage} 
                    setActionMessage = {setActionMessage}
                />
            </div>
        );

    }

    return <div></div>;
    
}