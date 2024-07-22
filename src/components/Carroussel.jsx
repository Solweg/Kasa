import React, { useState } from "react";
import "../styles/carroussel.scss";

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
      <button onClick={prevSlide} className="prev">
        &#10094;
      </button>
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
      <button onClick={nextSlide} className="next">
        &#10095;
      </button>
    </div>
  );
}

export default Carroussel;
