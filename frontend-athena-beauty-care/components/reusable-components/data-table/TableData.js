//
import Link from "next/link";

export default function TableData ({ tableFor, tableData, setItemId, openDeletePrompt }) {

    console.log(tableData);
    
    return (
        <tbody>
            {tableData.map(item => {
                return (
                    <tr key = {item.id}>
                        {item.data.map((value, index) => {

                            // Table data fields might content plain numbers and as in JavaScript numbers don't have an
                            // include method so we need to check if it's a string 
                            if(typeof value === "string") {

                                if(value.includes("View Details")) {
                                    return (
                                        <td key = {index + 1}>
                                            <button
                                                value = {value.substring(value.indexOf("-") + 1, value.length)} 
                                                onClick = {event => setItemId(event.target.value)}
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    );
                                }
                            

                                if(value.includes("Delete")) {
                                    return (
                                        <td key = {index + 1}>

                                            <button
                                                value = {value.substring(value.indexOf("-") + 1, value.length)}
                                                onClick = {openDeletePrompt}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    );
                                }

                                if(value.includes("http")) {
                                    return (
                                        <td key = {index + 1}>
                                            <Link href= {value}><a>View Details</a></Link>
                                        </td>
                                    )
                                }
                            }
                        
                            return (
                                <td key = {index + 1}>{value}</td>
                            ); 

                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}