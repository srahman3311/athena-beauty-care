//

export const displayHideTreatmentForm = (text, setIsAddingUpdating, setTreatmentInfo, setTreatmentId, treatments, id) => {


    // if user is just trying to add a new item then event.target.textContent would include the string "Add".
    // In that case just display the add/update form
    if(text.includes("Add")) {
        return setIsAddingUpdating(true);
    }


    // if user is just trying to close the form then event.target.textContent would include the string "Close".
    // In that case set locationInfo to empty string and hide the add/update form
    if(text.includes("Close")) {

        // Set every property to it's initial value. If user wanted to update but canceled afterwards then locationId will
        // need to be set to empty string as well. Otherwise if user later tries to add an item this id value will call the
        // update api endpoint l 
        setTreatmentInfo(currentVal => {

            return {
                ...currentVal,
                treatmentId: "",
                category: "",
                title: "",
                description: "",
                duration: "",
                price: "",
                stylists: [],
                remarks: ""
            };

        });

        return setIsAddingUpdating(false);
    }


    // If above both conditions are false then user is trying to update one location details

    // Set location id to empty string first so that location details modal gets hidden again
    setTreatmentId("");


    // Update button's id attribute would contain the id of location he/she is trying to update. Use it to find the 
    // location and update the locationInfo with it's details
    for(let i = 0; i < treatments.length; i++) {

        if(treatments[i]._id === id) {

            setTreatmentInfo(currentVal => {
                return {
                    ...currentVal,
                    treatmentId: treatments[i]._id.toString(),
                    title: treatments[i].title,
                    category: treatments[i].category,
                    description: treatments[i].description,
                    duration: treatments[i].duration,
                    price: treatments[i].price,
                    stylists: treatments[i].stylists,
                    remarks: treatments[i].remarks
                };
            });
            break;
        }
        
    }

    return setIsAddingUpdating(true);
 

}