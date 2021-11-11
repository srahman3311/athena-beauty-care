// Stylesheet
import styles from "../../../../styles/AdminList.module.css"


export default function Search () {

    return (
        <div className={styles.search}>
            <input type="text" name="search" placeholder="Search" autoComplete="off" />
        </div>
    );
}