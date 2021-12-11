import { useState, useEffect } from "react";
import axios from "axios";


export default function useAxios(method, url, body, happening) {

    //console.log(url);

    // // Need to put following three in the useEffect's dependecy array to allow for dynamic data fetching based on user's 
    // // search input, navigation to previous and next items.
    // let searchText = "";
    // let skip = 0;
    // let limit = 0;

    // // If it's a post request then body will contain searchText, skip and limit. Update the above three with the body's values
    // if(body !== "undefined") {
    //     searchText = body.searchText;
    //     skip = body.skip;
    //     limit = body.limit
    // }

    // console.log(searchText, skip, limit);
    // console.log(method, url, body);


    const [data, setData] = useState(null);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {

            setLoading(true);

            const response = await axios({ method, url, data: body });
            
        
            const newData = await response.data;

            //console.log(newData);

            // If data are being fetched with get method then an array of json objects has been sent from backend
            if(Array.isArray(newData)) return setData(newData);

            if(response.data.items === "undefined") {
                return setData(newData);
            }

            // Else, data are being fetched with post method. So an object has been sent from backend which contains data and
            // totalDataCount
            const { items, totalItemCount } = response.data;

            setData(items);
            
            setTotalDataCount(totalItemCount);
            
            
        } catch (error) {

            setError(error);

        } 
        finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        fetchData();

    }, [url, happening]); 

    //console.log(data);

    return { data, totalDataCount, error, loading };

}
