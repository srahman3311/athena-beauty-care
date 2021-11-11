//

export default function ItemTableHeader ({ itemHeaders }) {
    
    return (
        <thead>
            <tr>
                {itemHeaders.map((header, index) => {

                    if(header !== "_id" && header !== "__v") {
                        return (
                            <th key = {index + 1}>{header}</th>
                        );
                    }
                })}
            </tr>
        </thead>
    );
}