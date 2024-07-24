import React from "react";

function Tags({ tags }) {
    return (
        <div>
            {tags.map((tag, index) => (
                <span key={index} style={{ marginRight: '10px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
