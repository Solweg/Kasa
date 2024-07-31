import React from "react";
import "../styles/titleaccommodations.scss"

function TitleAccommodations({ title, location }) {
    return (
        <div className="titleaccommodations-container">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
        </div>
    );
}

export default TitleAccommodations;
