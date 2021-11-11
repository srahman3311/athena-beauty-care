//

export default function UpdateButton({ id, items, setItemId, setItemInfo, setIsAddingUpdating, displayHideForm }) {

    return (
        <div className="detailsUpdate_button" >

            <button
                id = {id} 
                className="update_button"
                onClick = {event => {

                    const text = event.target.textContent;
                    const id = event.target.id;
                    displayHideForm(text, setIsAddingUpdating, setItemInfo, setItemId, items, id)
                }}
            >
               Update
            </button>
        </div>
    );

}