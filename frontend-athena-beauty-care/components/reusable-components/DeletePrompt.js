// styles are in globals.css
import axios from "axios";


const DeletePrompt = ({ 
    itemId, 
    itemNameForDeletePrompt, 
    showDeletePrompt, 
    setShowDeletePrompt, 
    setActionMessage, 
    endpoint, 
    setHappening 
}) => {


    async function deleteItem (event) {

        console.log(event.target.value);

        const _id = event.target.value; 

        setShowDeletePrompt(false);
        

        try {

            setActionMessage("Deleting");

            const response = await axios.post(endpoint, { _id });

            setActionMessage(response.data);

        } catch(error) {

            console.log(error);

        } finally {

            setHappening("re-fetching");
        }
    }


    return (
        <div className="delete_prompt" style = {{display: showDeletePrompt ? "flex": "none"}}>
            <div className="deletePrompt_content">
                <p>Are you sure want to delete {itemNameForDeletePrompt}?</p>
                <button value = {itemId} onClick = {deleteItem}>Yes, I am sure</button>
            </div>
            
            <button onClick = {() => setShowDeletePrompt(false)}>X</button>
           
        </div>
    );
}


export default DeletePrompt;