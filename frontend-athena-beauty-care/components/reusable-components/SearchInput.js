

function SearchInput ({ value, setState, setHappening }) {

    function handleChange(event) {

        setState(currentValue => {
            return {
                ...currentValue,
                searchText: event.target.value
            };
        });

        setHappening("searching");
    }


    return (
        <div className="search">
            <input 
                type = "text"
                value = {value}
                placeholder="Search"  
                onChange = {handleChange} 
                
            />
        </div>
    );
}


export default SearchInput;