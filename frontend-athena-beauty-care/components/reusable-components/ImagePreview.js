// Stylesheet
import styles from "../../styles/ImageUpload.module.css";


function ImagePreview({ file, imageUrl }) {

    return (
        <div className={styles.image_preview}>
            <img 
                // URL.createObjectURL() methods creates a file path
                src = { file ? URL.createObjectURL(file) : (imageUrl ? imageUrl : "")} 
                alt = { file ? file.name : "" } 
            />
        </div>
    );

}


export default ImagePreview