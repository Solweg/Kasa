import React from "react";
import "../styles/hostinfo.scss";
import RatingOn from "../assets/RatingOn.png";
import RatingOff from "../assets/RatingOff.png";

// Ce composant affiche les informations sur l'hôte, y compris le nom, la photo,
// la note et l'emplacement.
function HostInfo({ host, rating, location }) {
  const totalStars = 5;

  return (
    <div className="hostinfo-container">
      <div className="host">
        <p className="name-host">{host.name}</p>
        <img src={host.picture} alt={host.name} className="picture-host" />
      </div>
      <div className="rating-location-container">
        <div className="location">{location}</div>
        <div className="rating">
          {[...Array(totalStars)].map((_, index) => (
            <img
              key={index}
              src={index < rating ? RatingOn : RatingOff}
              alt={index < rating ? "étoile allumée" : "étoile éteinte"}
              className="star"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HostInfo;
