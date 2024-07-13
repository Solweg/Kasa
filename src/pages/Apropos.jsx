import React from 'react';
import Banner from "../components/Banner";
import CollapsesPropos from "../components/collapses/CollapsesPropos"

function Apropos(){
    return(
        <div>
             <Banner currentPage="about" />
             <CollapsesPropos/>
        </div>
    )
}

export default Apropos