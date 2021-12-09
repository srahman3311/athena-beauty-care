


export default function DropdownList ({ name, nameKey, blankOptionValue, data, handleDropdownOnchange }) {

    return (
        <div className="dropdown_list">
            <select name = {name} onChange = {handleDropdownOnchange}>
                <option value = "">{blankOptionValue}</option>
                {data.map((item, index) => {

                    return (
                        <option key = {index + 1} value = {item[nameKey]}>
                            {item[nameKey]}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}








/*

Reusable Dropdown/Select Component
https://stackoverflow.com/questions/52789363/react-how-to-fit-json-api-data-into-reusable-select-component

*/