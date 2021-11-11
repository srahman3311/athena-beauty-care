// Axios
import axios from "axios";




export const updateEventStateWithData = async (setEventState, setEventInfo) => {


    try {

        const locationResponse = await axios.get("http://localhost:7070/api/locations");

        setEventState(currentVal => {
            return { ...currentVal, locations: locationResponse.data.locations};
        })

        setEventInfo(currentVal => {
            return {
                ...currentVal, 
                eventLocation: locationResponse.data.locations[0].title
            }
        });


        try {

            // System will let user select category from the dropdown. So fetch all the categories and update the state
            const categoryResponse = await axios.get("http://localhost:7070/api/categories");

            const newCategories = categoryResponse.data.categories;

            setEventState(currentVal => {
                return {
                    ...currentVal,
                    categories: newCategories
                };
            });




            try {

                // Fetch treatments based on category and stylists based on treatments. Intial values of treatment dropdown
                // will bebased on first category of the category dropdown. Initial values of stylist dropdown will be based 
                // on first treatment of the treatment dropdown.
                const endpoint = "http://localhost:7070/api/treatments/find-by-category";

                const treatmentResponse = await axios.post(endpoint, {category: newCategories[0].title});


                const newTreatments = treatmentResponse.data.treatments;
                const newStylists = newTreatments[0].stylists;

                setEventState(currentVal => {
                    return {
                        ...currentVal,
                        treatments: newTreatments,
                        stylists: newStylists
                    };
                });
            

                // If user is okay with first category of the category dropdown and first treatment of the treatment 
                // dropdown and first stylist of the stylist dropdown then he/she won't bother to change any of the 
                // three. In that case update the eventInfo state with the first category, first treatment and first
                // stylist. 
                setEventInfo(currentVal => {
                    return {
                        ...currentVal, 
                        treatmentCategory: newCategories[0].title,
                        treatmentName: newTreatments[0].title,
                        stylist: newStylists[0]
                    }
                });



            } catch (error) {

                alert(error.response.data.msg);

            }


        } catch (error) {

            alert(error.response.data.msg);

        }



    } catch(error) {

        alert(error.response.data.msg);

    }

    

}