import React from "react";
import "./style.css"

function Navbar({ children }) {
    return (
        <div className="uk-section-primary">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <span className="uk-text-lead uk-text-bold uk-text-uppercase">Google Books</span>
                        {children}
                    </ul>
                </div>
        </div>
    );
}

export default Navbar;
