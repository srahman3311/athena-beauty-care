// Stylesheet
import styles from "../../../../styles/CategoryTreatment.module.css";

// Components
import EventHandlerDiv from "../../client-reusable-components/EventHandlerDiv";
import CategorySerial from "./CategorySerial";




export default function Category ({ item, index, activeCategory, changeActiveCategory, selectedTreatments }) {

    // Gradients for background
    const blueGradient = "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))";
    const redGradient = "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))";

    // Styling Conditions
    const condition1 = activeCategory === item.title
    const condition2 = selectedTreatments.some(treatment => treatment.category === item.title);

    // Inline style
    const style = { backgroundImage: condition1 ? blueGradient : condition2 && redGradient }



    return (
        <div className={styles.categoryItem_container}>
    
            <EventHandlerDiv content = {item.title} clickEventHandler = {changeActiveCategory} />

            <div className={styles.category_item}>
                <div className={styles.categoryItem_content} style = {style} >

                    <CategorySerial 
                        index = {index} 
                        content = {item.title} 
                        activeCategory = {activeCategory} 
                    />

                    <p style = {{ color: activeCategory === item.title && "white" }}>{item.title}</p>
                    
                </div>
            </div>
        </div>
    );
    
}