// Next Modules

// React Modules
import React, { useEffect, useState } from "react";
import axios from "axios";

// Children
import ControlPanel from "../../components/admins/control-panel/ControlPanel";
// import SideNav from "../../components/nav/SideNav";
// import Title from "../../components/admins/Title";
import ListHeader from "../../components/admins/stylists/list/ListHeader";
import ListBody from "../../components/admins/stylists/list/ListBody";
import ViewLimit from "../../components/admins/stylists/list/ViewLimit";
import Search from "../../components/admins/stylists/list/Search";
import StylistAddForm from "../../components/admins/stylists/StylistAddForm";
// Stylesheet
import styles from "../../styles/AdminList.module.css";

export default function Stylists () {

    // Validation States
    const regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})"); // For password validations
    const [validationErrors, setValidationErrors] = useState({ 
        isEmpty: false, 
        isEmailInvalid: false,
        isPasswordInvalid: false, 
        isMatch: true 
    });
    
    // File Upload States
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    // Admin States
    const [addAdmin, setAddAdmin] = useState(false);
    const [admins, setAdmins] = useState([]);
    const [adminInfo, setAdminInfo] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    useEffect(() => {
        
        axios.post("http://localhost:7070/api/admins")
            .then(res => {
                setAdmins(res.data.admins);
            })
            .catch(err => console.log(err));
       
    }, []);


    const fileHandler = (e) => {
        // if there is a file already in the file state and user didn't upload any image at second attempt then 
        // previous file state shouldn't be changed.   
        if(file && !e.target.files.length) {
            setFile(file);
            setFilename(file.name);
        } 
        // else update the file state with uploaded file
        else {
          setFile(e.target.files[0]);
          setFilename(e.target.files[0].name);
          setIsUploading(true);
        }
    }


    function onChange (event) {
        const name = event.target.name;
        const value = event.target.value;

        setAdminInfo(currentVal => {
            return {
                ...currentVal,
                [name]: value
            };
        });
    }

   
    function addNewAdmin (event) {


        // Form Validation
        // If user forgets to fill a form field
        if (
            !adminInfo.firstName || 
            !adminInfo.lastName || 
            !adminInfo.email || 
            !adminInfo.password || 
            !adminInfo.password2
        ) {
            return setValidationErrors(currentVal => ({...currentVal, isEmpty: true}));
        }

        // if @ is not present in the email address or there is a space in it then show the email invalid error message
        if(adminInfo.email.indexOf("@") === -1 || adminInfo.email.indexOf(" ") !== -1) {
            return setValidationErrors(currentVal => ({...currentVal, isEmailInvalid: true}));
        }

        // Check the password against the regExp defined above. If fails show the password invalid error message 
        if(!regEx.test(adminInfo.password)) {
            return setValidationErrors(currentVal => ({...currentVal, isPasswordInvalid: true}));
        } 

        // If passwords aren't the same then show the password matching error message
        if(adminInfo.password !== adminInfo.password2) {
            setValidationErrors(currentVal => ({...currentVal, isMatch: false}));
            return;
        }

       
        // Once thevalidation is done and we have all the info about the new admin go ahead and send the info to backend
        
        


        // if everything is okay, go ahead and add a new user or update the existing user's info
        const adminData = new FormData();

        adminData.append("file", file);
        adminData.append("firstName", adminInfo.firstName);
        adminData.append("lastName", adminInfo.lastName);
        adminData.append("email", adminInfo.email);
        adminData.append("password", adminInfo.password);
        adminData.append("filename", filename);

        
        const endPoint = "http://localhost:7070/api/admins/add";
        //const headers = {"x-auth-token": jwtToken};
        // with FormData only a single object can be sent 
        // file will be available at backend with req.files object
        // axios.post(endPoint, data, { headers })
        axios.post(endPoint, adminData)
            .then(res => {
                console.log(res.data.msg)
            })
            .catch(err => console.log(err));
    }

    function hideAddForm () {

        // Hide the error messages first
        setValidationErrors(currentVal => {
            return {
                ...currentVal,
                isEmpty: false, 
                isEmailInvalid: false,
                isPasswordInvalid: false, 
                isMatch: true
            };
        });

        // Then set the value of each property of adminInfo object to empty string again. 
        setAdminInfo(currentVal => {
            return {
                ...currentVal,
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
                password2: ""
            }
        }); 

        // After that set the file value to null
        setFile(null);

        // Finally, hide the form
        setAddAdmin(false)
    }

    return (

        <div className={styles.admin_list}>
            <ControlPanel />
            {/* <Title /> */}
            <div className={styles.admin_list_content}>
                {/* <SideNav /> */}
                <div className={styles.list_content} style = {{display: addAdmin ? "none" : "block"}}>
                    <div className={styles.view_search_add}>
                        {/* <ViewLimit /> */}
                        <Search />
                        <div className="add">
                            <button onClick = {() => setAddAdmin(true)}>Add New Admin</button>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <ListHeader />
                        {admins.map(admin => {
                            return <ListBody key={admin._id} admin = {admin}/>
                        })}
                        
                    </div>
                </div>

                <StylistAddForm 
                    validationErrors = {validationErrors}
                    addAdmin = {addAdmin} 
                    hideAddForm = {hideAddForm}
                    adminInfo = {adminInfo} 
                    onChange={onChange} 
                    file = {file}
                    filename = {filename}
                    imgUrl = {imgUrl}
                    isUploading = {isUploading}
                    fileHandler = {fileHandler}
                    addNewAdmin = {addNewAdmin}
                />
            </div>
        </div>
    );
}