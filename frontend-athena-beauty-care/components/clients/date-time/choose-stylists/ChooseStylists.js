import { useState } from "react";

// Components 
import ItemHeader from "../../client-reusable-components/ItemHeader";
import { findTimeSlots } from "../../../../lib/find-time-slots-copy/findTimeSlots";




export default function ChooseStylists ({ location, selectedTreatments, setDateTimes, setActiveDate }) {

    const styles = {
        width: "60%",
        margin: "0 auto 10px auto",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#ccc"
    }


    const [treatments, setTreatments] = useState([]);
    


    // OnChange handler for stylist
    function finalizeTreatments(event, index) {

        // event.target.value contains the stylist
        const stylist = event.target.value;

        // Find the treatment from the selectedTreatments list using index
        const treatment = selectedTreatments[index];
        const newTreatmentTitle = selectedTreatments[index].title;
        

        // Every treatment has multiple stylists and user has the flexibility to choose stylist from the stylists of a 
        // specific treatment. If user is trying to change the stylist then previous treatment must be ommitted.  
        const doesExist = treatments.some(newItem => newItem.treatmentTitle === newTreatmentTitle);

        if(doesExist) {

            

            const filteredTreatments = treatments.filter(item => item.treatmentTitle !== newTreatmentTitle);

            const newtreatment = {

                category: treatment.category,
                choosenStylist: stylist,
                location,
                treatmentDuration: treatment.duration,
                treatmentPrice: treatment.price,
                treatmentTitle: treatment.title

            }

            return setTreatments([...filteredTreatments, newtreatment])
        }


        const newtreatment = {

            category: treatment.category,
            choosenStylist: stylist,
            location,
            treatmentDuration: treatment.duration,
            treatmentPrice: treatment.price,
            treatmentTitle: treatment.title

        }

        setTreatments(currentValue => { return [...currentValue, newtreatment]});

    }


    async function findTimes() {


        // Need to sort the treatments as per the client's selection order. 
        const newTreatments = [];

        selectedTreatments.forEach(selectedTreatment => {

            treatments.forEach(treatment => {

                if(treatment.treatmentTitle === selectedTreatment.title) {

                    newTreatments.push(treatment);
                }

            });
        });

       
        const dateTimes = await findTimeSlots(newTreatments);

        setDateTimes(dateTimes);

        const firstDate = dateTimes[0].date.date + "-" + dateTimes[0].date.month.toLowerCase();
        console.log(firstDate);

        setActiveDate(firstDate);

       
    }





    return (
        <div className="choose_stylists">
            <ItemHeader content = "Choose stylists" />

            {
                selectedTreatments.map((treatment, index) => {

                    return (

                        <div className="chooseStylists_content" style = {styles} key = {treatment.title}>
                            <p>{location}</p>
                            <p>{treatment.category}</p>
                            <p>{treatment.title}</p>
                            <select 
                                name = "treatment" 
                                // Index will find the treatment from the selectedTreatments list
                                onChange = {event => finalizeTreatments(event, index)}
                            >
                                <option value = "">Choose stylist</option>
                                {treatment.stylists.map(stylist => {
                                    return (
                                        <option key = {stylist} value = {stylist}>{stylist}</option>
                                    );
                                })}
                            </select>
                        </div>

                    );
                })
            }


            {/* <div className="chooseStylists_content" style = {styles}>
                <p>Location</p>
                <p>Category</p>
                <p>Treatment</p>
                <select>
                    <option value = "Athena Gorgeous">Athena Gorgeous</option>
                    <option value = "Soudi Gorgeous">Soudi Gorgeous</option>
                    <option value = "Jennifer Gorgeous">Jennifer Gorgeous</option>
                </select>
            </div> */}
          
           
            <div className="buttonssss" style = {{width: "100%", textAlign: "center"}}>
                <button onClick={findTimes}>Find Available Starting Times</button>
            </div>
            
        </div>
    );
}