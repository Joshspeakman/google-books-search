import axios from "axios";

export default {
    getSearchResult: function(query) {
        return axios.get("/search/" + query);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};