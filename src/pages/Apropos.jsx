import React from 'react';
import Banner from "../components/Banner";
import Collapses from "../components/Collapses"

function Apropos(){
    return(
        <div>
             <Banner currentPage="about" />
             <Collapses/>
        </div>
    )
}

export default Apropos