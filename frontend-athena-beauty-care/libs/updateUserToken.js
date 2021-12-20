// Modules needed to update admin info
import axios from "axios";


const updateUserToken = async (endpoint, username, authCode) => {

    console.log(authCode);

    try {

        const response = await axios.post(endpoint, { username, authCode }, {withCredentials: true});

        return response.data;
    }

    catch(error) {

        alert(error.response.data);
    }

}

export default updateUserToken;



