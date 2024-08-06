// Footer avec le logo et le texte de droits d'auteur.

import React from "react";
import logo from "../assets/logoFooter.png";
import "../styles/footer.scss";
import "../styles/global.scss";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <img className="footer__logo" src={logo} alt="logo Kasa" />
        <p className="footer__text">© 2020 Kasa. All <br/>rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
