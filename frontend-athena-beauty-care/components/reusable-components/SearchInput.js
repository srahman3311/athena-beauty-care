

function SearchInput ({state, setState, searchData, endpoint, setItems, setLoadingErrorMessage }) {


    return (
        <div className="search">
            <input 
                type = "text"
                value = {state.searchText}
                placeholder="Search"  
                //onChange = {event => searchData(event.target.value, state, setState, endpoint, setItems, setLoadingErrorMessage)} 
                onChange = {searchData} 
                
            />
        </div>
    );
}


export default SearchInput;