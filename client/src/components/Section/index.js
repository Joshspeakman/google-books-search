import React from "react";
import "./style.css"

function Section({ children }) {
    return (
        <div className="uk-section uk-background-muted">
            <div className="uk-container">
                {children}
            </div>
        </div>
    );
}

export default Section;
