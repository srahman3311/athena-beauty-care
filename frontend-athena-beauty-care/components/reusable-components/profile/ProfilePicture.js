

// Stylesheet
import styles from "../../../styles/stylists/Stylists.module.css";



const ProfilePicture = ({ imageSrc }) => {



    return (
        <div className={styles.profilePic_container}>
            <img className={styles.profile_pic} src = {imageSrc} alt = "Athena" />
        </div>
    );
}



export default ProfilePicture;