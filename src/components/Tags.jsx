// liste des tags.

import React from "react";
import "../styles/tags.scss";

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
