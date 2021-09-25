import Image from "next/image";
// Stylesheet
import styles from "../../../styles/DateTime.module.css";

import Beautician from "../../../images/person-girl-flat.png"
import Beautician2 from "../../../images/Component 143 – 2.png"



export default function Stylists () {

    return (

        <div className={styles.stylists_container}>
            <h4 style = {{marginBottom: "10px"}}>Stylist</h4>
           <div className={styles.stylist} style={{backgroundColor: "pink"}}>
               <div className={styles.imageHidden_div}>

               </div>
               <Image src={Beautician} />
               <p style = {{textAlign: "center"}}>Athena</p>
           </div>
           <div className={styles.stylist}>
               <div className={styles.imageHidden_div}>
                   
               </div>
               <Image src={Beautician} />
               <p style = {{textAlign: "center"}}>Soudi</p>
           </div>
           <div className={styles.stylist}>
               <div className={styles.imageHidden_div}>
                   
               </div>
               <Image src={Beautician} />
               <p style = {{textAlign: "center"}}>Tina</p>
           </div>
            
            
        </div>

    );
}