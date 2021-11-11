

export default function CloseFormButton({ closeForm, setData, setIsAddingUpdating }) {

    return (
        <div className="displayForm_button">
            <button 
                className="" 
                onClick = {event => closeForm(event.target.textContent, setIsAddingUpdating, setData)}
            >
                Close
            </button>
        </div>

    );
}