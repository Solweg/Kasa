import React, { useEffect, useState } from "react";
import "../styles/banner.scss";

// Ce composant affiche une bannière avec une image et du texte, 
// et ajuste le texte pour les appareils mobiles.
function Banner({ img, text, className }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatTextForMobile = text => text.replace(', ', ',\n');

  return (
    <div className={`banner ${className}`}>
      <img className="img__banner" src={img} alt="falaises" />
      {text && (
        <h1 className="banner__text">
          {isMobile ? formatTextForMobile(text) : text}
        </h1>
      )}
    </div>
  );
}

export default Banner;
