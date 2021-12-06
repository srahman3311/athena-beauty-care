// styles are in globals.css
export default function ClosePopUpMessageButton ({ setActionMessage }) {

    return (
        <button className = "close_popup_message_button" onClick = {() => setActionMessage(null)}>X</button>
    );
}