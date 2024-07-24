import React from "react";

function TitleAccommodations({ title, location }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
    );
}

export default TitleAccommodations;
