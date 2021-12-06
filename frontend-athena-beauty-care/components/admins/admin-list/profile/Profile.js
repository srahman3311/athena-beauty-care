// Children
import ProfileImage from "./ProfileImage";

export default function Profile ({ admin }) {
    return (
        <div>
            <h1>{admin.firstName}</h1>
            <ProfileImage admin = {admin} />
        </div>
        
    );
}