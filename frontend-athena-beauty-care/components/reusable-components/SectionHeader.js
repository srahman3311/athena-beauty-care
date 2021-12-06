// Stylesheet
import styles from "../../styles/common-styles/CommonStyles.module.css";



export default function SectionHeader({ content }) {

    return (
        <div className = {styles.section_header}>

            <h4 className = {styles.sectionHeader_content}>{content}</h4>

        </div>
    );

}