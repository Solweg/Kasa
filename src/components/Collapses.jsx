import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Data from "../data.json";
import Carroussel from "../components/Carroussel.jsx";
import Banner from "../components/Banner";
import "../styles/collapses.scss";

function Collapses({ items }) {
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
            {items.map((item, index) => (
                <div className={`collapse-item ${openCollapses.includes(index) ? "open" : ""}`} key={index}>
                    <div className="collapse-header" onClick={() => toggleCollapse(index)}>
                        {item.title}
                        <span className={`collapse-icon ${openCollapses.includes(index) ? "open" : ""}`} />
                    </div>
                    <div
                        className="collapse-content"
                        ref={el => (contentRefs.current[index] = el)}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}

Collapses.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired
};

export function Apropos() {
    const items = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div>
            <Banner currentPage="about" />
            <Collapses items={items} />
        </div>
    );
}

export function Logement() {
    const { id } = useParams();
    const logement = Data.find(item => item.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    const { description, equipments, title, pictures } = logement;

    const items = [
        {
            title: "Description",
            content: <p>{description}</p>
        },
        {
            title: "Équipements",
            content: (
                <ul>
                    {equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        }
    ];

    return (
        <div>
            <Carroussel pictures={pictures} />
            <h1>{title}</h1>
            <Collapses items={items} />
        </div>
    );
}

export default Collapses;
