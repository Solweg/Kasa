import React from "react";
import Data from "../data.json";
// import { Link } from "react-router-dom";

function Accommodations() {
  return (
    <div>
        <article>
            {Data.map((item) => (
                <div key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.cover} alt={item.title} />
                </div>
            ))}
        </article>
    </div>
    
  );
}

export default Accommodations;
