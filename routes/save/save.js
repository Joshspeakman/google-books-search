const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Save route '/api/books'
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

    // Save route '/api/books/:id'
router.route('/:id')
    .delete(booksController.remove);

module.exports = router;