import React from "react";
import "../styles/titleaccommodations.scss";

// Ce composant affiche le titre et l'emplacement des hébergements.
function TitleAccommodations({ title, location }) {
  return (
    <div className="titleaccommodations-container">
      <h1 className="title">{title}</h1>
      <p className="location">{location}</p>
    </div>
  );
}

export default TitleAccommodations;
