
export default function SearchInput ({state, setState, searchData }) {


    return (
        <div className="search">
            <input 
                type = "text"
                value = {state.searchText}
                placeholder="Search"  
                onChange = {event => searchData(event.target.value, state, setState)}  
            />
        </div>
    );
}