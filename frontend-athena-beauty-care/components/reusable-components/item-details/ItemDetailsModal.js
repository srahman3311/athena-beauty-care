// Components
import Input from "../Input";
import ItemDetailsHeader from "./ItemDetailsHeader";
import ItemDetailsContent from "./ItemDetailsContent";
import CloseButton from "./CloseButton";
import UpdateButton from "./UpdateButton";
import DisplayFormButton from "../DisplayFormButton";



export default function ItemDetailsModal({ 
    items, itemId, setItemId, itemHeaders, isAddingUpdating, setIsAddingUpdating, setItemInfo, displayHideForm 
}) {

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div
                        key = {index + 1} 
                        className="itemDetails_modal" 
                        style = {{
                            display: itemId === item._id.toString() && !isAddingUpdating ? "block" : "none"
                        }} 
                    >

                        {Object.entries(item).map(([key, value], index) => {

                    

                            if(key !== "_id" && key !== "__v" && key !== "stylists") {
                                return (
                                    //Styles are in globals.css
                                    <div className="itemDetails_modal_content" key = {index + 1}>
                                        <ItemDetailsHeader itemHeaders = {itemHeaders} index = {index} />
                                        <ItemDetailsContent value = {value} />
                                    </div>
                                );
                            }
                        })}

                        <CloseButton setItemId = {setItemId} />


                        <UpdateButton
                            id = {item._id.toString()}
                            items = {items}
                            // setItemId is for 
                            setItemId = {setItemId}
                            setItemInfo = {setItemInfo}
                            setIsAddingUpdating = {setIsAddingUpdating}
                            displayHideForm = {displayHideForm} 
                        />
                    </div>
                );
            })}
        </>
    );

}