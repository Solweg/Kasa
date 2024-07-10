import React from "react";
import logo from "../assets/logoFooter.png";
import "../styles/footer.scss";
import "../styles/all.scss"

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={logo} alt="logo kasa" />
            <p className="footer__text">© 2020 Kasa.<br /><span> All rights reserved</span></p>
        </div>
    );
}

export default Footer;
