import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Auth () {

    const router = useRouter();

    useEffect(() => {

        if(!router.isReady) return;

        const { code } = router.query;
        
        if(typeof code !== "undefined" || !code || code === null) return router.push("/admins/calendar");
        
        localStorage.setItem("authCode", code);
       
        return router.push("/admins/calendar");
       
    }, [router.isReady]) 

   

    return (
        <div className="dashboard"></div>
    );
}


