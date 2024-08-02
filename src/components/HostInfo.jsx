import React from "react";
import "../styles/hostinfo.scss";
import RatingOn from "../assets/RatingOn.png";
import RatingOff from "../assets/RatingOff.png";

function HostInfo({ host, rating, location }) {
  const totalStars = 5;

  return (
    <div className="hostinfo-container">
      <div className="host">
        <img src={host.picture} alt={host.name} className="picture-host" />
        <p className="name-host">{host.name}</p>
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
