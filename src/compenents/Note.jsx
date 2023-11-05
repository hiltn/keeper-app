import React from "react";

function note(props) {
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default note;
