

// Components 
import ItemHeader from "../../client-reusable-components/ItemHeader";




export default function ChooseStylists ({ selectedTreatments }) {

    const styles = {
        width: "60%",
        margin: "0 auto 10px auto",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#ccc"
    }

    return (
        <div className="choose_stylists">
            <ItemHeader content = "Choose stylists" />
            <div className="chooseStylists_content" style = {styles}>
                <p>Location</p>
                <p>Category</p>
                <p>Treatment</p>
                <select>
                    <option value = "Athena Gorgeous">Athena Gorgeous</option>
                    <option value = "Soudi Gorgeous">Soudi Gorgeous</option>
                    <option value = "Jennifer Gorgeous">Jennifer Gorgeous</option>
                </select>
            </div>
          
           
            <div className="buttonssss" style = {{width: "100%", textAlign: "center"}}>
                <button>Find Available Starting Times</button>
            </div>
            
        </div>
    );
}