import styles from "../../../styles/stylists/Stylists.module.css";

const ProfilePicture = () => {

    const imageSrc = "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo="

    return (
        <div className={styles.profilePic_container}>
            <img className={styles.profile_pic} src = {imageSrc} alt = "Athena" />
        </div>
    );
}



export default ProfilePicture;