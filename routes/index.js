const path = require('path');
const router = require('express').Router();
const searchRoutes = require('./search');
const saveRoutes = require('./save');

// API Routes
router.use('/search', searchRoutes);
router.use('/api', saveRoutes);


// If no API routes are hit, send the React app
// Define any API routes before this runs
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;