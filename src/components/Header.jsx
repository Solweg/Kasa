import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div>
                <img src={logo} alt="logo kasa" />
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to ={"/"}>ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to ={"apropos"}>A PROPOS</Link>
                        </li>
                    </ul>   
                </nav>    
            </div>
        </>
    );
}

export default Header;
