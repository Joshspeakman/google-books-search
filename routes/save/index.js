const router = require('express').Router();
const saveRoutes = require('./save');

// Save routes
router.use('/books', saveRoutes);

module.exports = router;