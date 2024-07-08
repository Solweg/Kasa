import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/header.scss";

function Header() {
    return (
        <>
            <div className="header">
                <img className="logo__header"src={logo} alt="logo kasa" />
                <nav className="navbar__header">
                    <ul>
                        <li>
                            <Link className="navbar__link" to ={"/"}>ACCUEIL</Link>
                        </li>
                        <li>
                            <Link className="navbar__link" to ={"apropos"}>A PROPOS</Link>
                        </li>
                    </ul>   
                </nav>    
            </div>
        </>
    );
}

export default Header;

