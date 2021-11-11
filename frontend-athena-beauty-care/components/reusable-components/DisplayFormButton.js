
export default function DisplayFormButton({ text, setIsAddingUpdating, displayHideForm }) {

    return (
        <div className="displayForm_button">
            <button 
                className="" 
                onClick = {event => displayHideForm(event.target.textContent, setIsAddingUpdating)}
            >
                {text}
            </button>
        </div>

    );
}