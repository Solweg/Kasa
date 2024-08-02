// carrousel d'images avec navigation et compteur.

import React, { useState } from "react";
import "../styles/carroussel.scss";
import VectorIcon from "../assets/VectorAccommodations.png";

function Carroussel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div className="carroussel">
      {pictures.length > 1 && (
        <button onClick={prevSlide} className="prev">
          <img src={VectorIcon} alt="Précédent" className="icon prev-icon" />
        </button>
      )}
      <div className="carroussel-inner">
        {pictures.map((picture, index) => (
          <div
            className={`carroussel-item ${index === current ? "active" : ""}`}
            key={index}
            style={{ display: index === current ? "block" : "none" }}
          >
            <img src={picture} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <button onClick={nextSlide} className="next">
            <img src={VectorIcon} alt="Suivant" className="icon next-icon" />
          </button>
          <div className="carroussel-counter">
            {current + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carroussel;
