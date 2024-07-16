import React, { useState, useRef, useEffect } from "react";
import "../styles/collapses.scss";


function CollapsesPropos() {
    const [openCollapses, setOpenCollapses] = useState([]);
    const contentRefs = useRef([]);

    const toggleCollapse = (index) => {
        setOpenCollapses(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(i => i !== index);
            } else {
                return [...prevState, index];
            }
        });
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = openCollapses.includes(index) ? `${ref.scrollHeight}px` : "0px";
            }
        });
    }, [openCollapses]);

    return (
        <div className="collapses-container">
            {["Fiabilité", "Respect", "Service", "Sécurité"].map((title, index) => (
                <div className={`collapse-item ${openCollapses.includes(index) ? "open" : ""}`} key={index}>
                    <div className="collapse-header" onClick={() => toggleCollapse(index)}>
                        {title}
                        <span className={`collapse-icon ${openCollapses.includes(index) ? "open" : ""}`} />
                    </div>
                    <div
                        className="collapse-content"
                        ref={el => (contentRefs.current[index] = el)}
                    >
                        {getCollapseContent(index)}
                    </div>
                </div>
            ))}
        </div>
    );
}

const getCollapseContent = (index) => {
    switch (index) {
        case 0:
            return "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
        case 1:
            return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
        case 2:
            return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
        case 3:
            return "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
        default:
            return "";
    }
};

export default CollapsesPropos;
