import React, { useState, useRef, useEffect } from "react";
import "../styles/collapses.scss";
import VectorIcon from "../assets/Vector.png";

// Ce composant affiche des éléments collapsibles (repliables).
function Collapses({ items = [], containerClass = "" }) {
  const [openCollapses, setOpenCollapses] = useState([]);
  const contentRefs = useRef([]);

  const toggleCollapse = (index) => {
    setOpenCollapses((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = openCollapses.includes(index)
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [openCollapses]);

  return (
    <div className={`collapses-container ${containerClass}`}>
      {items.map((item, index) => (
        <div
          className={`collapse-item ${openCollapses.includes(index) ? "open" : ""}`}
          key={index}
        >
          <div className="collapse-header" onClick={() => toggleCollapse(index)}>
            {item.title}
            <span className={`collapse-icon ${openCollapses.includes(index) ? "open" : ""}`}>
              <img src={VectorIcon} alt="Icône de basculement" />
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
