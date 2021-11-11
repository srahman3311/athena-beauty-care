// Stylesheet
import styles from "../../../styles/AdminList.module.css"




export default function ImageUploader ({ file, filename, fileHandler, imgUrl, isUploading }) {

    return (
        <div className={styles.image_uploader}>
            <div className={styles.upload_container}>
                <div className={styles.image_preview}>
                    <img src = { file ? (!isUploading ? imgUrl : URL.createObjectURL(file)) : null } alt={file? filename : null} />
                </div>
                <div className={styles.image_file_input}>
                    <input type="file" onChange={fileHandler} title=""/>
                    <span className={styles.image_filename}>{ file === null ? "No File Selected" : filename}</span>
                    <span className={styles.image_upload_button}>Choose File</span>
                </div>
            </div>
        </div>
    );
}