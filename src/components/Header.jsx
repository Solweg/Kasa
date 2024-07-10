import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";

function Header() {
    return (
        <div className="header">
            <img className="logo__header" src={logo} alt="logo kasa" />
            <nav className="navbar__header">
                <ul>
                    <li>
                        <NavLink exact className="navbar__link" to="/" activeClassName="active">ACCUEIL</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar__link" to="/apropos" activeClassName="active">A PROPOS</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
