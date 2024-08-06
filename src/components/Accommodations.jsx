import React from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";
import "../styles/accommodations.scss";

// Ce composant affiche une liste d'hébergements avec des liens vers leurs détails.
function Accommodations() {
  return (
    <div className="accommodations-container">
      {Data.slice(0, 6).map(item => (
        <Link 
          key={item.id}
          to={`/logement/${item.id}`}
          className="accommodation-card"
        >
          <h2>{item.title}</h2>
          <img src={item.cover} alt={item.title} />
        </Link>
      ))}
    </div>
  );
}

export default Accommodations;
