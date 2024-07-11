import React from "react";
import Data from "../data.json";
import "../styles/accommodations.scss";
// import { Link } from "react-router-dom";

function Accommodations() {
  return (
    <div className="accommodations-container">
        {Data.slice(0, 6).map((item) => (
            <div key={item.id} className="accommodation-card">
                <h2>{item.title}</h2>
                <img src={item.cover} alt={item.title} />
            </div>
        ))}
    </div>
  );
}

export default Accommodations;
