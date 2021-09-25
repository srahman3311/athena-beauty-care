// React
import { useState } from "react";

// Stylesheet
import styles from "../styles/Home.module.css";


// components
import NavigationBar from "../components/clients/navigation-bar/NavigationBar";
import CategoryTreatment from "../components/clients/category-treatment/CategoryTreatment";
import Location from "../components/clients/location/Location";
import DateTime from "../components/clients/date-time/DateTime";
import InformationPayment from "../components/clients/information-payment/InformationPayment";
import Confirmation from "../components/clients/confirmation-page/Confirmation";


export default function Home () {

    const [selectedTreatments, setSelectedTreatments] = useState([]);
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
    const [activeTreatment, setActiveTreatment] = useState("");
    const [activePage, setActivePage] = useState(1);
    

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

        setActiveTreatment("");
        setActiveCategory(text);
    }

    function changeActiveTreatment (event) {

        const text = event.target.textContent;
        const treatment = text.substring(0, text.indexOf(","));
        // console.log(treatment);

        

        if(treatment === activeTreatment) return setActiveTreatment("");
        return setActiveTreatment(treatment);

        //return activeTreatment ? setActiveTreatment("") : setActiveTreatment(treatment);
    }

    function addTreatment (stylist, item) {

        // console.log(stylist, item);

        

       
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
                            choosenStylist: stylist 
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
                    choosenStylist: stylist 
                }
            ]
        );

        return setActiveTreatment("");

       
            
    }

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

    console.log(selectedTreatments);
    return (
        <div className={styles.home}>
            <NavigationBar activePage = {activePage} setActivePage = {setActivePage} />


            <CategoryTreatment
                selectedTreatments = {selectedTreatments}
                addTreatment = {addTreatment}
                activePage = {activePage}
                activeCategory = {activeCategory}
                activeTreatment = {activeTreatment}
                changeActiveTreatment = {changeActiveTreatment} 
                changeActiveCategory = {changeActiveCategory}
            />

            <Location 
                activePage = {activePage}
                state = {state}
                updateState = {updateState} 
            />


            <DateTime
                state = {state} 
                activePage = {activePage}
                updateState = {updateState} 
            />

            <InformationPayment 
                activePage = {activePage}
                clientInfo = {clientInfo}
                clientInfoOnChangeHandler = {clientInfoOnChangeHandler} 
                validationError = {validationError}
            />


            <Confirmation activePage = {activePage} />
        </div>
    );
}