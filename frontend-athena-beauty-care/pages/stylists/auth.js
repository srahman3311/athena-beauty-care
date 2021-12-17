import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Auth () {

    const router = useRouter();

    useEffect(() => {

        if(!router.isReady) return;

        // typeof router.query.code is undefined means user has denied access to his/her google calendar. So redirect
        // him/her to the calendar page
        if(typeof router.query.code === "undefined") return router.push("/stylists/calendar");      

        // User has given the access, now get it from the router.query object
        const { code } = router.query;

        // Save the auth code in the localStorage to use it inside the calendar route. 
        localStorage.setItem("authCode", code);
       
        return router.push("/stylists/calendar");
       
    }, [router.isReady]) 

   

    return (
        <div className="dashboard"></div>
    );
}


