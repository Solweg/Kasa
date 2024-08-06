import React from "react";
import logomobile from "../assets/logomobile.png";
import logodesktop from "../assets/logodesktop.png";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <picture>
          <source srcSet={logodesktop} media="(min-width: 600px)" />
          <img className="logo__header" src={logomobile} alt="logo Kasa" />
        </picture>
        <nav className="navbar__header">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar__link active" : "navbar__link"
                }
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apropos"
                className={({ isActive }) =>
                  isActive ? "navbar__link active" : "navbar__link"
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
