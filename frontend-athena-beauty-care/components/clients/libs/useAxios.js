import { useState, useEffect } from "react";
import axios from "axios";


export default function useAxios(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {

        try {

            setLoading(true);

            const endPoint = `http://localhost:7070/api/locations/${url}`;

            const response = await axios.get(endPoint);

            setData(response.data);
            
        } catch (error) {

            setError(error);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        fetchData();

    }, [url]);

    return { data, error, loading };

}
