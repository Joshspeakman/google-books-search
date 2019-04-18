import React, { Component } from "react";
import Section from "../components/Section";
import Form from "../components/Form";
import Card from "../components/Card";
import API from "../utils/API";

class Search extends Component {
    state = {
        bookSearch: "",
        result: []
    };

    handleInputChange = e => {
        e.preventDefault();
        const value = e.target.value;
        // console.log(e.target.value);

        this.setState({
            bookSearch: value
        });
    }

    handleOnClickSubmitButton = e => {
        e.preventDefault();

        var elem = document.getElementById("searchResult");
        if (elem) elem.remove();

        console.log(this.state.bookSearch);

        API.getSearchResult(this.state.bookSearch)
            .then(res => {
                // console.log(res.data);
                this.setState({ result: res.data });
            })
            .catch(err => console.log(err));
    };

    handleOnClickSaveButton = e => {
        e.preventDefault();
        console.log(e.target.id);
        const saveBtn = document.querySelector(`#${e.target.id}`);

        API
            .saveBook({
                title: saveBtn.dataset.title,
                author: saveBtn.dataset.author,
                description: saveBtn.dataset.description,
                image: saveBtn.dataset.image,
                link: saveBtn.dataset.link
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div className="uk-container-large">
                <Section>
                    <h2 className="uk-text-center uk-text-bold">(React) Google Books Search</h2>
                    <h5 className="uk-text-center">Search for and Save Books of Interest</h5>
                </Section>

                <Section>
                    <Form>
                        <legend className="uk-legend">Book Search</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-stacked-text">Book</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                    placeholder="Book name or author..."
                                    // value={this.state.bookSearch}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-default uk-float-right" onClick={this.handleOnClickSubmitButton}>Submit</button>
                        </div>
                    </Form>
                </Section>

                {this.state.result.length > 0 &&
                    <Section id="searchResult">
                        <legend className="uk-legend">Result</legend>
                        {this.state.result.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                author={item.author}
                                image={item.image}
                                description={item.description}
                                link={item.link}
                            >
                                <button
                                    className="uk-button uk-button-default uk-button-small uk-float-right uk-margin-left"
                                    id={'savebutton' + index}
                                    onClick={this.handleOnClickSaveButton}
                                    data-title={item.title}
                                    data-author={item.author}
                                    data-description={item.description}
                                    data-image={item.image}
                                    data-link={item.link}
                                >Save</button>
                            </Card>
                        ))}
                    </Section>
                }
            </div>
        );
    };
}

export default Search;