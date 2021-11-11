//
import { fetchLocationData } from "../../libs/location-modifiers/fetchLocationData";




export default function NextPrevItems ({ state, setState }) {

    const { searchText, skip, limit, dataLength } = state;

    // Previous Button
    const firstCondtion = skip - limit < 0;
    const secondCondition = skip === dataLength && skip - limit * 2 >= 0 ? skip - limit * 2 : skip - limit;

    return (

        <div className="next-prev">
            <button 
                name = "prev" 
                onClick = {event => fetchLocationData(state, Number(event.target.value), setState)} 
                value = {firstCondtion ? 0 : secondCondition }
            >
                    &laquo; Prev
            </button>
            <button 
                name="next" 
                onClick={event => fetchLocationData(state, Number(event.target.value), setState)} 
                value={skip + limit > dataLength ? skip : skip + limit }>
                    Next &raquo;
            </button>
        </div>
        
    )
}





