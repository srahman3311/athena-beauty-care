//

export default function CloseButton({ setItemId }) {

    return (
        <div className="detailsUpdate_button" >

            <button 
                className="update_button"
                onClick = {() => setItemId("")}
            >
               Close
            </button>
        </div>
    );

}