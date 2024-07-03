import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Acceuil from './routes/Acceuil'
import Apropos from './routes/Apropos'
import Article from './routes/Article'
import ErrorPage from'./routes/ErrorPage'

function Router() {
    return (
        <>
            <BrowserRouter>
                {/* définir les différentes routes ici */}
                <Routes>
                    <Route path="/" element={<Acceuil />} />
                    <Route path="/" element={<Apropos />} />
                    <Route path="/" element={<Article/>} />

                    <Route path="/" element={<ErrorPage/>} />

                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router
