//
import { useEffect, useState } from "react";
import useAxios from "../../../clients/libs/useAxios";

export default function WorkSchedule() {

    const { data, error, loading }  = useAxios("xxx");
    const [locations, setLocations] = useState([]);


    useEffect(() => {
        
        if(data.length) setLocations(data);

    }, [data])

   

    if(error) return <div>Something went wrong</div>;
    if(loading) return <div>Loading....</div>;

    return (
        <div className="work_schedule">
            <p>Work Schedule</p>
        </div>
    );
}