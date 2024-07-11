import React from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";
import "../styles/accommodations.scss";

function Accommodations() {
  return (
    <div className="accommodations-container">
      {Data.map((item) => (
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
