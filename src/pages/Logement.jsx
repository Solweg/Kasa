import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Collapses from "../components/Collapses.jsx";
import data from "../data.json";
import TitleAccommodations from "../components/TitleAccommodations.jsx";
import HostInfo from "../components/HostInfo.jsx";
import Tags from "../components/Tags.jsx";
import "../styles/global.scss";
import "../styles/logement.scss";

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find(item => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/error"); // Redirection vers la page d'erreur
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; 
  }

  const logementData = [
    {
      title: "Description",
      content: <p>{logement.description}</p>
    },
    {
      title: "Équipements",
      content: (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <div className="logement-container">
      <Carroussel pictures={logement.pictures} />
      <div className="info-container">
        <div className="info-container--left">
          <TitleAccommodations title={logement.title} location={logement.location} />
          <Tags tags={logement.tags} />
        </div>
        <div className="info-container--right">  
          <HostInfo host={logement.host} rating={logement.rating} />
        </div>
      </div>
      <div className="logement-collapses">
        <Collapses items={logementData} containerClass="logement-collapses-container" />
      </div>
    </div>  
  );
}

export default Logement;
