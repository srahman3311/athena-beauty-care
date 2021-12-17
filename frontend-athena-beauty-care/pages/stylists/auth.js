import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Auth () {

    const router = useRouter();

    useEffect(() => {

        if(!router.isReady) return;

        const { code } = router.query;

        console.log(code);

        //if(typeof code === "undefined" || !!code) return router.push("/stylists/calendar");
        
        localStorage.setItem("authCode", code);
       
        return router.push("/stylists/calendar");
       
    }, [router.isReady]) 

   

    return (
        <div className="dashboard"></div>
    );
}


