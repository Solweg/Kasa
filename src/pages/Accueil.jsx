// Composant affichant la page d'accueil avec une bannière et une liste d'hébergements.

import React from "react";
import Banner from "../components/Banner";
import Accommodations from "../components/Accommodations";
import imgBannerHome from "../assets/banner_Img1.svg";

function Accueil() {
  return (
    <div>
      <Banner
        img={imgBannerHome}
        text="Chez vous, partout et ailleurs"
        className="banner--home"
      />
      <Accommodations />
    </div>
  );
}

export default Accueil;
