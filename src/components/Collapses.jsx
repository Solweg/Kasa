import React, { useState, useRef, useEffect } from "react";
import "../styles/collapses.scss";
import VectorIcon from "../assets/Vector.png"; // Importez l'image

// Composant fonctionnel qui affiche des éléments collapsibles
function Collapses({ items = [] }) {
    // État pour suivre quels éléments sont ouverts
    const [openCollapses, setOpenCollapses] = useState([]);
    // Référence pour stocker les références des éléments de contenu
    const contentRefs = useRef([]);

    // Fonction pour basculer l'état d'ouverture/fermeture d'un élément
    const toggleCollapse = (index) => {
        setOpenCollapses((prevState) =>
            // Si l'index est déjà dans openCollapses, le retirer (fermer)
            prevState.includes(index)
                ? prevState.filter((i) => i !== index)
                : // Sinon, ajouter l'index (ouvrir)
                [...prevState, index]
        );
    };

    // useEffect pour ajuster la hauteur des éléments de contenu après chaque changement de openCollapses
    useEffect(() => {
        // Boucler sur chaque référence de contenu
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                // Si l'élément est ouvert, ajuster la hauteur maximale à sa hauteur totale
                // Sinon, la définir à 0 pour le cacher
                ref.style.maxHeight = openCollapses.includes(index) ? `${ref.scrollHeight}px` : "0px";
            }
        });
    }, [openCollapses]); // Déclencher cet effet chaque fois que openCollapses change

    return (
        <div className="collapses-container">
            {/* Boucler sur les items pour rendre chaque élément collapsible */}
            {items.map((item, index) => (
                <div className={`collapse-item ${openCollapses.includes(index) ? "open" : ""}`} key={index}>
                    <div className="collapse-header" onClick={() => toggleCollapse(index)}>
                        {item.title}
                        {/* Utilisez l'image pour indiquer l'état ouvert/fermé */}
                        <span className={`collapse-icon ${openCollapses.includes(index) ? "open" : ""}`}>
                            <img src={VectorIcon} alt="Toggle icon" />
                        </span>
                    </div>
                    <div className="collapse-content" ref={(el) => (contentRefs.current[index] = el)}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Collapses;
