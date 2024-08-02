// Page "À propos" avec une bannière et les éléments collapsibles.

import React from 'react';
import Banner from "../components/Banner.jsx";
import ImgBannerAbout from "../assets/banner_Img2.png";
import Collapses from "../components/Collapses.jsx";
import "../styles/apropos.scss";

const aboutData = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
  }
];

function Apropos() {
  return (
    <div>
      <Banner img={ImgBannerAbout} text="" className="banner--about" />
      <Collapses items={aboutData} containerClass="apropos-collapses-container" />
    </div>
  );
}

export default Apropos;
