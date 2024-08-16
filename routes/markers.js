// routes/markers.js
const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');

// Route to save a new marker
router.post('/', markerController.saveMarker);

// Route to get all markers
router.get('/', markerController.getAllMarkers);

router.delete('/', markerController.deleteMarker);

module.exports = router;