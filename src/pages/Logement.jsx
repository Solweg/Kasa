// Détails d'un logement avec carrousel, informations, tags et collapses.

import React from "react";
import { useParams } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Collapses from "../components/Collapses.jsx";
import data from "../data.json";
import TitleAccommodations from "../components/TitleAccommodations.jsx";
import HostInfo from "../components/HostInfo.jsx";
import Tags from "../components/Tags.jsx";
import "../styles/logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
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
          {/* titre et localisation */}
          <TitleAccommodations title={logement.title} location={logement.location} />
          {/* mots clé */}
        <Tags tags={logement.tags} />
        </div>
        <div className="info-container--right">  
          {/* Loueur et notation */}
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
