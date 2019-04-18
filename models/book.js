const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String },
    description: { type: String },
    image: { type: String, default: "http://via.placeholder.com/100" },
    link: { type: String},
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;