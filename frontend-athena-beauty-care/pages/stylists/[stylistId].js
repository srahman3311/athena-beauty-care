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

// Stylesheet
import styles from "../../styles/stylists/Stylists.module.css";





export default function Stylist () {

    const router = useRouter();

    const { stylistId } = router.query;
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [stylist, setStylist] = useState(null);
    const [stylistTableData, setStylistTableData] = useState([]);



    useEffect(() => {


        async function fetchData() {
            console.log("hi");
            console.log(stylistId);

            if(stylistId) {

                try {

                    setLoading(true);

                    const response = await axios.get("http://localhost:7070/api/stylists/" + stylistId);

                    console.log(response.data);

                    setStylist(response.data);

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
       
    }, [router.isReady])

    console.log(router.isReady);

    console.log(stylistId);


    if(loading) return <div>Loading....</div>

    if(stylist !== null) {

        return (
            <div className={styles.stylist_profile}>

                <ControlPanel />
                <div className={styles.stylistProfile_content}>

                    <div className={styles.stylist_summary}>
                        <ProfilePicture />
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
                
            </div>
        );

    }

    return <div></div>;
    
}