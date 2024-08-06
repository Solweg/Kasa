import React from "react";
import "../styles/tags.scss";

// Ce composant affiche une liste de tags.
function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
