//



export default function SaveButton({ _id, data, addNewItem, setError, setSuccessFailMessage }) {

    return (
        <div className="save_button">
            <button
                // _id is for
                value = {_id}  
                className="" 
                onClick = {() => addNewItem(_id, data, setError, setSuccessFailMessage)}
            >
                Save
            </button>
        </div>
    );
}