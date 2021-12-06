// Modules
import axios from "axios";

export const searchItems = async (searchText, state, setState, endpoint, setItems, setLoadingErrorMessage) => {

    let { skip, limit } = state;


    try {

        setLoadingErrorMessage(currentValue => {return { ...currentValue, loading: true }});
        
        const response = await axios.post(endpoint, { searchText, skip, limit });

        const { items, totalItemCount } = response.data;

        setItems(items);

        setState(currentValue => {
            return {
                ...currentValue,
                searchText,
                limit,
                dataLength: totalItemCount
            }
        });

        

    } catch (error) {

        setLoadingErrorMessage(currentValue => {return { ...currentValue, error: true }});

    } finally {
        setLoadingErrorMessage(currentValue => {return { ...currentValue, loading: false }});
    }

}