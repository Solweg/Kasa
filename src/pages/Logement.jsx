import React from "react";
import { useParams } from "react-router-dom";
import Collapses from "../components/Collapses.jsx";
import data from "../data.json";

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
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <Collapses items={logementData} />
    </div>
  );
}

export default Logement;
