// Component for checking if user is authenticated or not
//import { useRouter } from "next/router";
import Cookies from "universal-cookie";

export const CheckAuth = () => {

    //const router = useRouter();
    const cookies = new Cookies();
    
    const jwtToken = cookies.get("jwtToken");

    if(typeof jwtToken === "undefined") return false;

    return true;
    
}