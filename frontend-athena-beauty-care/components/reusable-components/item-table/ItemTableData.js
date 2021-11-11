//

export default function ItemTableData ({ items, setItemId, state, setState, deleteItem }) {



    
    return (
        <tbody>
            {items.map((item, itemIndex) => {
                return (
                    <tr key = {itemIndex + 1}>

                        {Object.entries(item).map(([key, value], valueIndex) => {

                            // key !== "stylists" is for treatments table 
                            if(key !== "_id" && key !== "__v" && key !== "stylists") {

                                return <td key = {valueIndex + 1}>{value.toString()}</td>
                            } 
                        
                        })}

                        <td>
                            <button onClick = {() =>  setItemId(item._id.toString())}>
                                View
                            </button>
                        </td>
                        <td>
                            <button
                                value = {item._id.toString()} 
                                onClick = {event =>  deleteItem(event.target.value, state, setState)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}