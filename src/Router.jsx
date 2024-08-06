import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.scss'; 

// Ce composant définit le routeur de l'application avec les différentes routes et leur rendu.
function Router() {
    return (
        <div id="app">
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="apropos" element={<Apropos />} />
                        <Route path="logement/:id" element={<Logement />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Router;
