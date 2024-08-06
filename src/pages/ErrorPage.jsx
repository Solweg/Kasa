//page d'erreur 404 avec un message et un lien de retour à la page d'accueil.

import React from 'react';
import "../styles/errorPage.scss";
import "../styles/global.scss";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="error-link">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default ErrorPage;
