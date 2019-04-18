import React, { Component } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import API from "../utils/API";

class Save extends Component {
    state = {
        result: []
    };

    componentDidMount = () => {
        this.loadBooks();
    };

    loadBooks = () => {
        var elem = document.getElementById("savedBooks");
        if (elem) elem.remove();

        API.getBooks()
            .then(res => {
                // console.log(res.data);
                this.setState({ result: res.data });
            })
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="uk-container-large">
                <Section>
                    <h2 className="uk-text-center uk-text-bold">(React) Google Books Search</h2>
                    <h5 className="uk-text-center">Search for and Save Books of Interest</h5>
                </Section>


                {this.state.result.length > 0 &&
                    <Section id="savedBooks">
                        <legend className="uk-legend">Saved Books</legend>
                        {this.state.result.map((savedBook, index) => (
                            <Card
                                key={savedBook._id}
                                title={savedBook.title}
                                author={savedBook.author}
                                image={savedBook.image}
                                description={savedBook.description}
                                link={savedBook.link}
                            >
                                <button
                                    className="uk-button uk-button-default uk-button-small uk-float-right uk-margin-left save-button"
                                    onClick={() => this.deleteBook(savedBook._id)}
                                >Delete</button>
                            </Card>
                        ))}
                    </Section>
                }
            </div>
        );
    };
}

export default Save;