const axios = require("axios");
const router = require('express').Router();

require('dotenv').config();
const keys = require('../keys.js');

const google_book_key = keys.googlebook;
// console.log(`google key: ${google_book_key.key}`);

// Route /search?q=req.query
// router.get('/', (req, res) => {
//     console.log('/search');

//     const url = 'https://www.googleapis.com/books/v1/volumes?';
//     console.log(req.query);
//     axios.get(url, {params: {q: req.query}})
//         .then(response => {
//             console.log("!!!YES!!!");

//             res.json(response.data);
//         })
//         .catch(err => {
//             console.log("AAAAAAAAA");
//             res.json(err.message);
//         });
// });

// Route /search/:searchTerm
router.get('/:searchTerm', (req, res) => {

    // const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.params.searchTerm}`;
    axios.get(url)
        .then(response => {
            const result = [];
            for (let i = 0; i < response.data.items.length; i++) {
                const info = response.data.items[i]["volumeInfo"];

                result.push({
                    title: info.title,
                    author: info.authors[0],
                    description: info.description,
                    image: ("imageLinks" in info) ? info.imageLinks.thumbnail : "http://via.placeholder.com/100",
                    link: info.previewLink
                });
            };

            res.json(result);
        })
        .catch(err => {
            console.log("ERROR");
            res.json(err.message);
        });
});

module.exports = router;