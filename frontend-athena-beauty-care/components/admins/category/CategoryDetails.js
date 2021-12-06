// Stylesheet
import styles from "../../../styles/Events.module.css";



// 
const CategoryDetails = ({ categories, categoryId, setCategoryId, openAddCategoryModal }) => {

    return (
        <>
            {categories.map((category, index) => {
                return (
                    <div
                        key = {category._id.toString()}
                        className = {styles.eventDetails_modal} 
                        style = {{display: categoryId === category._id.toString() ? "block" : "none"}}
                    >
                        <p>{category.title}</p>
                        <button onClick = {() => setCategoryId("")}>Close</button>
                        <button value = {index} onClick = {openAddCategoryModal}>Update</button>
                    </div>
                );
            })}
           
        </>
    );
}


export default CategoryDetails;