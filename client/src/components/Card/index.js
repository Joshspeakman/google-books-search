import React from "react";
// import "./style.css"

function Card(props) {
    return (
        <div className="uk-card uk-card-secondary uk-margin">
            <div className="uk-card uk-card-secondary uk-card-body">
                <h3 className="uk-card-title">
                    {props.title}

                    {props.children}

                    <button className="uk-button uk-button-default uk-button-small uk-float-right uk-margin-left">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
                    </button>
                </h3>

                <p>Written by {props.author}</p>

                <div className="uk-flex-middle" uk-grid="true">
                    <div className="uk-width-1-5@s uk-flex-first">
                        <img data-src={props.image} width="" height="" alt="" uk-img="true"></img>
                    </div>
                    <div className="uk-width-4-5@s uk-text-top">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

