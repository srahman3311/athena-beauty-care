//React & Other Modules
import axios from "axios";

// Children 
import Profile from "../../components/admins/stylists/profile/Profile";


export const getStaticPaths = async () => {

    const response = await axios.get("http://localhost:7070/api/admins");
    const data = await response.data.admins;

    // console.log(data);

    const paths = data.map(admin => {
        return { params: {admin: admin.email} };
    });


    return { paths, fallback: false };
}


export const getStaticProps = async (context) => {

    const email = context.params.admin;

    const response = await axios.get("http://localhost:7070/api/admins/" + email);
    const admin = await response.data.admin;

    return { props: { admin } };
}





export default function Admin ({ admin }) {

    
    return (
        <div className="admin_profile">
            <p>{admin.email}</p>
            <Profile admin = {admin} />
        </div>
    );
}