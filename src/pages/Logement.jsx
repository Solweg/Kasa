import React from "react";
import { useParams } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Collapses from "../components/Collapses.jsx";
import data from "../data.json";
import TitleAccommodations from "../components/TitleAccommodations.jsx";
import HostInfo from "../components/HostInfo.jsx";
import Tags from "../components/Tags.jsx";

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
      <TitleAccommodations title={logement.title} location={logement.location} />
      <HostInfo host={logement.host} rating={logement.rating} />
      <Tags tags={logement.tags}/>
      <Collapses items={logementData} />
    </div>
  );
}

export default Logement;
