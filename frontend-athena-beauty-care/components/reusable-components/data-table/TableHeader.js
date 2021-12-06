//

export default function TableHeader ({ tableHeaders }) {
    
    return (
        <thead>
            <tr>
                {tableHeaders.map(header => {
                    return <th key = {header}>{header}</th>
                })}
            </tr>
        </thead>
    );
}