export default function CategorySerial ({ index, content, activeCategory }) {

    const style = {
        backgroundColor: activeCategory === content && "white",
        color: activeCategory === content && "black"
    }


    return (
        <span style = {style}>{index + 1}</span>
    );
}