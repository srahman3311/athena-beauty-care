import Script from "next/script";

import styles from "../../../styles/stylists/Stylists.module.css";



// Styles are in Stylist.module.css
export default function StylistList({ stylists, treatmentInfo, addStylist, removeStylist }) {


    return (
        <div className={styles.stylist_list}>
            <Script src="https://kit.fontawesome.com/14ab8b126d.js" crossorigin="anonymous" />
            <p>Add Stylist</p>
            <div className={styles.stylistList_content}>
                
                <div className={styles.add_stylist} >
                    <p>Available stylists</p>
                    {stylists.map((stylist, index) => {
                        return (
                            
                            <div className={styles.addStylist_content} key = {index + 1}>
                                <p>{stylist.firstName} {stylist.lastName}</p>
                                <button
                                    className = {styles.addRemove_button}
                                    value = {stylist.firstName + " " + stylist.lastName}
                                    onClick = {addStylist}
                                >
                                    +
                                </button>
                            </div>
                        
                            
                        );
                    })}
                </div>


                {/* style = {{display: !treatmentInfo.stylists.length ? "none" : "block"}} */}
                <div className={styles.remove_stylist}>
                    <p>Added or exisiting stylists</p>
                    {treatmentInfo.stylists.map((stylist, index) => {
                        return (
                            
                            <div className={styles.removeStylist_content} key = {index + 1}>
                                <p>{stylist}</p>
                                <button
                                    className = {styles.addRemove_button}
                                    value = {stylist}
                                    onClick = {removeStylist}
                                >
                                    -
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


