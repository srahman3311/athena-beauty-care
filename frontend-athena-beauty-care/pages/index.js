// React
import { useState, useEffect } from "react";
import useAxios from "../components/clients/libs/useAxios";
import axios from "axios";


// Stylesheet
import styles from "../styles/Home.module.css";

// Reusable Components
import Alert from "../components/reusable-components/Alert";

// components
import NavigationBar from "../components/clients/navigation-bar/NavigationBar";
import CategoryTreatment from "../components/clients/category-treatment/CategoryTreatment";
import Location from "../components/clients/location/Location";
import DateTime from "../components/clients/date-time/DateTime";
import InformationPayment from "../components/clients/information-payment/InformationPayment";
import Confirmation from "../components/clients/confirmation-page/Confirmation";


export default function Home () {


    // Other states
    const [clientEvents, setClientEvents] = useState([]);
    const [selectedTreatments, setSelectedTreatments] = useState([]);
    const [sortedSelectedTreatments, setSortedSelectedTreatments] = useState([]);
    const [validationError, setValidationError] = useState(false);
    const [clientInfo, setClientInfo] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        howHeardAboutUs: "",
        others: "",
    });
    const [state, setState] = useState({
        category: "",
        treatment: "",
        location: "",
        session: "",
        date: "",
        stylist: "",
        coupon: "",
        paid: false,
    });
    const [activeCategory, setActiveCategory] = useState("Brows");
    const [activePage, setActivePage] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");





    // update the state with values of the non input fields such as location, stylist, date, time etc. 
    function updateState (event) {

        const text = event.target.textContent;

        if(text.includes("Athena Beauty Care")) {
            return setState(currentValue => {
                return {
                    ...currentValue,
                    location: text
                }
            });
        }

    }

    function changeActiveCategory (e) {
        const text = e.target.textContent;

       
        setActiveCategory(text);
    }

   

    /*
    function addTreatment (stylist, item) {
       
        // loop through the already selected treatments to see if clicked one exists or not. It returns either true or false
        const doesExist = selectedTreatments.some(newItem => newItem.treatmentTitle === item.title);

        // If clicked treatment exists update the selectedTreatments array by removing the clicked treatment
        if(doesExist) {

            const temp = [];

            selectedTreatments.forEach(newItem => {
                    
                if(newItem.treatmentTitle !== item.title) {
                    temp.push(newItem);
                }
                    
            })

            setSelectedTreatments(temp);

            if(stylist) {

                setSelectedTreatments(currentValue => 
                    [
                        ...currentValue, 
                        { 
                            category: item.category, 
                            treatmentTitle: item.title, 
                            treatmentDuration: item.duration, 
                            treatmentPrice: item.price,
                            choosenStylist: stylist,
                            location: state.location 
                        }
                    ]
                );
                
            } else {

                return setActiveTreatment("");
                
            }
            
            return setActiveTreatment("");
        }

        // If clicked treatment doesn't exist then add it in the selectedTreatments array
        setSelectedTreatments(currentValue => 
            [
                ...currentValue, 
                { 
                    category: item.category, 
                    treatmentTitle: item.title, 
                    treatmentDuration: item.duration, 
                    treatmentPrice: item.price,
                    choosenStylist: stylist,
                    location: state.location 
                }
            ]
        );

        return setActiveTreatment("");

    }
    */

    function clientInfoOnChangeHandler (event) {

        const name = event.target.name;
        const value = event.target.value

        return setClientInfo(currentValue => {
            return {
                ...currentValue,
                [name]: value
            }
        });

    }


    function selectTreatment(event, treatments) {

        const treatmentTitle = event.target.textContent;

        // loop through the already selected treatments to see if clicked one exists or not. It returns either true or false
        const doesExist = selectedTreatments.some(newItem => newItem.title === treatmentTitle);


        if(doesExist) {

            const filteredSelectedTreatments = selectedTreatments.filter(treatment => treatment.title !== treatmentTitle);
            setSelectedTreatments(filteredSelectedTreatments);
        } else {

            for(let x = 0; x < treatments.length; x++) {

                if(treatments[x].title === treatmentTitle) {

                    setSelectedTreatments(currentValue => { return [...currentValue, treatments[x]] });
                    break;
                }
            }
        }

    }


    async function createBooking() {

        try {

            const response = await axios.post("http://localhost:7070/api/events/client-events", {
                sortedSelectedTreatments,
                selectedTime,
                clientInfo
            });

            const data = await response.data;

            setClientEvents(data);

        } catch(error) {

            console.log(error.response.data);

        } finally {

            setClientInfo({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                howHeardAboutUs: "",
                others: ""
            });

            setState(currentValue => {
                return {
                    ...currentValue, 
                    location: ""
                }
            })
            setSelectedTreatments([]);
            setSortedSelectedTreatments([]);
            setSelectedDate("");
            setSelectedTime("");
            setActivePage(5);
        }

       
        
    }
    

    
    // console.log(locationData);

    // if(locationDataLoading || categoryDataLoading || treatmentDataLoading) {
    //     return (<div>Loading....</div>);
    // }

    return (
        <div className={styles.home}>
            <NavigationBar 
                state = {state} 
                selectedTreatments = {selectedTreatments}
                activePage = {activePage} 
                setActivePage = {setActivePage} 
                selectedTime = {selectedTime}
            />
            <Location
                activePage = {activePage}
                state = {state}
                updateState = {updateState} 
            />

            <CategoryTreatment
                selectedTreatments = {selectedTreatments}
                activePage = {activePage}
                activeCategory = {activeCategory}
                changeActiveCategory = {changeActiveCategory}
                selectTreatment = {selectTreatment}
            />

            <DateTime
                state = {state} 
                activePage = {activePage}
                updateState = {updateState} 
                location = {state.location}
                selectedTreatments = {selectedTreatments}
                setSortedSelectedTreatments = {setSortedSelectedTreatments}
                selectedDate = {selectedDate}
                setSelectedDate = {setSelectedDate}
                selectedTime = {selectedTime}
                setSelectedTime = {setSelectedTime}
            />

            <InformationPayment 
                activePage = {activePage}
                clientInfo = {clientInfo}
                clientInfoOnChangeHandler = {clientInfoOnChangeHandler} 
                validationError = {validationError}
                createBooking = {createBooking}
            />


            <Confirmation 
                activePage = {activePage}
                clientEvents={clientEvents}

            />
            {/* <Alert message="" /> */}
        </div>
    );
}