import React from "react";


function Form({ children }) {
    return (
        <form className="uk-form-stacked">

            <div className="uk-margin">
                {children}
            </div>

        </form>
    );
}

export default Form;
