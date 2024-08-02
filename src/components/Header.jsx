// En-tête avec le logo et la barre de navigation.

import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo__header" src={logo} alt="logo Kasa" />
        <nav className="navbar__header">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar__link active" : "navbar__link"
                }
              >
                ACCUEIL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apropos"
                className={({ isActive }) =>
                  isActive ? "navbar__link active" : "navbar__link"
                }
              >
                A PROPOS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
