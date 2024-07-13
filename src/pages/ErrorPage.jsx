import React from 'react';
import "../styles/errorPage.scss";

function ErrorPage(){
    return(
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className="error-link">Retourner sur la page d'accueil</a>
        </div>
    )
}

export default ErrorPage;
