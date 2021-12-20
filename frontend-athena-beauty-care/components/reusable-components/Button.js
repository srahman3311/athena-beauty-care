import styles from "../../styles/Button.module.css";

function Button({ text, customClassName }) {

    // Dynamic style of button based on className provided from parent component
    let buttonStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 139, 0.678), rgb(0, 0, 139), rgba(0, 0, 139, 0.664))"
    };

    if(customClassName === "cancel_button") {
        buttonStyle.backgroundImage = "linear-gradient(#f05454b2, #F05454, #f05454b2)"
    }

    
    return (

        <button className = {styles.button} style = {buttonStyle}>
            {text}
        </button>
        
    );

}

export default Button;