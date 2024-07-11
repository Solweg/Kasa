import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import "../styles/all.scss";

function Header() {
    return (
        <div className="header">
            <img className="logo__header" src={logo} alt="logo kasa" />
            <nav className="navbar__header">
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "navbar__link active" : "navbar__link"}
                        >
                            ACCUEIL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/apropos" 
                            className={({ isActive }) => isActive ? "navbar__link active" : "navbar__link"}
                        >
                            A PROPOS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
