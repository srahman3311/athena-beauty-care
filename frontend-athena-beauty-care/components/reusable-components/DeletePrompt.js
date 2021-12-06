// styles are in globals.css


const DeletePrompt = ({ itemId, itemNameForDeletePrompt, showDeletePrompt, setShowDeletePrompt, deleteItem, deleting }) => {

    return (
        <div className="delete_prompt" style = {{display: showDeletePrompt || deleting ? "block": "none"}}>
            <p>Are you sure want to delete {itemNameForDeletePrompt}?</p>
            <button value = {itemId} onClick = {deleteItem}>Yes</button>
            <button onClick = {() => setShowDeletePrompt(false)}>No</button>

            {deleting && <p>Deleting...</p>}
           
        </div>
    );
}


export default DeletePrompt;