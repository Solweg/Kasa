import React from "react";

function HostInfo({ host, rating }) {
    return (
        <div>
            <div>
                <img src={host.picture} alt={host.name} />
                <p>{host.name}</p>
            </div>
            <div>{`Rating: ${rating}`}</div>
        </div>
    );
}

export default HostInfo;
