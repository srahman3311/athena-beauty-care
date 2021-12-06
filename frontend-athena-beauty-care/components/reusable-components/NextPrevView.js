const NextPrevView = ({ state }) => {

    const { skip, limit, dataLength } = state;
    
    return (

        <div className="items-view" style = {{backgroundColor: "#ccc", padding: "5px 0"}}>
            <div className="data-content">
                <p>Showing { 
                dataLength === 0 ? 0 : dataLength === skip ? (limit + 1 > dataLength ? 1 : skip - limit + 1) : skip + 1
                } to { 
                limit + skip > dataLength ? dataLength : limit + skip 
                } of {dataLength} results 
                </p>
            </div>
           
        </div>
    )
}

export default NextPrevView;
