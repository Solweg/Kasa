import React from "react";
import logo from "../assets/logo.png";
import _header from "../styles/_header.scss"

function Header() {
    return (
        <>
            <div>
                <img src={logo} alt="logo kasa" />
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="#"> ACCUEIL </a>
                        </li>
                        <li>
                            <a href="src/pages"> A PROPOS </a> 
                        </li>
                    </ul>   
                </nav>    
            </div>
        </>
    );
}

export default Header;
