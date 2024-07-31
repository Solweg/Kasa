import React from "react";
import { useParams } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Collapses from "../components/Collapses.jsx";
import data from "../data.json";
import TitleAccommodations from "../components/TitleAccommodations.jsx";
import HostInfo from "../components/HostInfo.jsx";
import Tags from "../components/Tags.jsx";
import "../styles/logement.scss"

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
    <div>
      <Carroussel pictures={logement.pictures} />
      <div className="info-container">
        <TitleAccommodations title={logement.title} location={logement.location} />
        <HostInfo host={logement.host} rating={logement.rating} />
      </div>
      <Tags tags={logement.tags} />
      <div className="logement-collapses">
        <Collapses items={logementData} containerClass="logement-collapses-container" />
      </div>
    </div>
  );
}

export default Logement;
