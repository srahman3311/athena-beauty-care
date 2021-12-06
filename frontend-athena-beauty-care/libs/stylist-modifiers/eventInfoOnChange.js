//
import axios from "axios"

export const eventInfoOnChange = async (event, setEventInfo, eventState, setEventState) => {

    // if user is trying to backspace on date picker and empty the input field then just return. It will prevent
    // app from breaking
    if(event === null) return;

    // if typeof event.target is undefined that means user is picking a date
    if(typeof event.target === "undefined") {

        const date = new Date(event).getDate();
        const month = new Date(event).getMonth() + 1;
        const year = new Date(event).getFullYear();

        //console.log(`${date}-${month}-${year}`)

        return setEventInfo(currentVal => {
            return {
                ...currentVal,
                eventDate: event
            };
        });
    }


    const name = event.target.name;
    const value = event.target.value;


    // If name is treatmentCategory then user is selecting a category. So update the eventState of treatments with related 
    // treatments of selected category and update the eventState of stylists with the related stylists of the first treatment
    if(name === "treatmentCategory") {

        const endpoint = "http://localhost:7070/api/treatments/find-by-category";

        try {
            const response = await axios.post(endpoint, {category: value});

            const treatments = response.data.treatments;
            const stylists = treatments[0].stylists;

            setEventState(currentVal => {
                return { ...currentVal, treatments, stylists };
            });

            // values of treatmentCategory, treatment, stylist and eventDuration of eventInfo state must also change based on 
            // category change. treatment value will be first treatment of the updated treatment list, stylist value will 
            // be first stylist of the stylists of the first treatment and eventDuration will be the duration of the first
            // treatment's duration
            return setEventInfo(currentVal => {
                return {
                    ...currentVal,
                    treatmentCategory: value,
                    treatmentName: treatments[0].title,
                    stylist: stylists[0],
                    eventDuration: treatments[0].duration
                };
            });

        } catch (error) {

            alert(error.response.data.message);
        }

    }



    // stylists of eventState must be repopulated with the stylists of selected treatment. And the stylist value of 
    // eventInfo state will be new stylists array's first value. 
    if(name === "treatmentName") {

        for(let x = 0; x < eventState.treatments.length; x++) {

            const treatment = eventState.treatments[x];
    
            if(treatment.title === value) {

                setEventState(currentVal => {
                    return { ...currentVal, stylists: treatment.stylists };
                });

                setEventInfo(currentVal => {
                    return {
                        ...currentVal,
                        treatmentName: value,
                        stylist: treatment.stylists[0],
                        eventDuration: treatment.duration
                    };
                });

                break;
            }
        }

        return;

    }



    setEventInfo(currentVal => {
        return {
            ...currentVal,
            [name]: value
        };
    });

}