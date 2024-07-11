
import React from "react";
import Banner from "../components/Banner"
import Accommodations from "../components/Accommodations.jsx"


function Acceuil(){
    return(
        <div>
             <Banner currentPage="home" />
             <Accommodations/>
        </div>
    )
}

export default Acceuil