// Stylesheet
import styles from "../../styles/ImageUpload.module.css";



function FileInput({ file, setFile }) {

    function fileHandler(event) {

        event.preventDefault();

        setFile(event.target.files[0])

    }


    return (
        <form className = {styles.image_file_input}>
            <input type = "file" onChange = {fileHandler} />
            <span className={styles.image_filename}>{ file === null ? "No File Selected" : file.name}</span>
            <span className={styles.image_upload_button}>Choose File</span>
        </form>
    );
}


export default FileInput;