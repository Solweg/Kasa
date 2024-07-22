import React, { useState } from "react";
import "../styles/carroussel.scss";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carrousel">
      <button className="carrousel__button" onClick={previousImage}>
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel__image"
      />
      <button className="carrousel__button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default Carrousel;
