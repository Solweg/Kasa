import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/collapses.scss";

function Collapses({ items = [] }) {
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
                    <div className="collapse-content" ref={(el) => (contentRefs.current[index] = el)}>
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
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default Collapses;
