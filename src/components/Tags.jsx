import React from "react";
import "../styles/tags.scss"

function Tags({ tags }) {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index}className="tags">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
