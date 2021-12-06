import TableHeader from "./TableHeader";
import TableData from "./TableData";

const DataTable = ({ tableFor, tableHeaders, tableData, dynamicClass, setItemId, openDeletePrompt  }) => {

    return (
        <div className="data-table">
            <table>
                <TableHeader tableHeaders = {tableHeaders} />
                <TableData 
                    tableFor = {tableFor} 
                    tableData = {tableData} 
                    setItemId = {setItemId} 
                    openDeletePrompt = {openDeletePrompt } 
                />
            </table>
        </div>
    );

}

export default DataTable;