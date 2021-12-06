//
import { fetchLocationData } from "../../libs/location-modifiers/fetchLocationData";




export default function NextPrevItems ({ state, fetchNextPrevItems }) {

    const { searchText, skip, limit, dataLength } = state;

    // Previous Button
    const firstCondtion = skip - limit < 0;
    const secondCondition = skip === dataLength && skip - limit * 2 >= 0 ? skip - limit * 2 : skip - limit;

    return (

        <div className="next-prev">
            <button 
                name = "prev" 
                onClick = {fetchNextPrevItems} 
                value = {firstCondtion ? 0 : secondCondition }
            >
                    &laquo; Prev
            </button>
            <button 
                name="next" 
                onClick={fetchNextPrevItems} 
                value = { skip + limit > dataLength ? skip : skip + limit }>
                    Next &raquo;
            </button>
        </div>
    )
}





