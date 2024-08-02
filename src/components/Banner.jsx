// Bannière avec une image et un texte "optionnel".

import React from "react";
import "../styles/banner.scss";

function Banner({ img, text, className }) {
  return (
    <div className={`banner ${className}`}>
      <img className="img__banner" src={img} alt="falaises" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
