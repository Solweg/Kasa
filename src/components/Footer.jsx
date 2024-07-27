// Footer.jsx
import React from "react";
import logo from "../assets/logoFooter.png";
import "../styles/footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <img className="footer__logo" src={logo} alt="logo kasa" />
                <p className="footer__text">© 2020 Kasa.<br /><span> All rights reserved</span></p>
            </footer>
        </div>
    );
}

export default Footer;
