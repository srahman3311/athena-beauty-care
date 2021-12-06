import ClosePopUpMessageButton from "./ClosePopUpMessageButton";

// styles are in globals.css
export default function Message ({ message, setActionMessage }) {

    const messageStyle = {
        transform: message ? "translate(-50%, 0%)" : "translate(-50%, 150%)"
    };

    return (
        <div className="message" style = {messageStyle}>
           <p>{message}</p>
           <ClosePopUpMessageButton setActionMessage = {setActionMessage} />
        </div>
    );
}





