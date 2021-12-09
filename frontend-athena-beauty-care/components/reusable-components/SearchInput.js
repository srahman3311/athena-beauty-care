

function SearchInput ({ value, setState, setHappening }) {

    function handleChange(event) {

        // User might search after navigating to next or previous items. If that's the case then skip and limit values
        // were updated. But we must show the search results without skipping any search results.  
        setState(currentValue => {
            return {
                ...currentValue,
                searchText: event.target.value,
                skip: 0,
                limit: 20
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