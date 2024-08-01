const express = require('express');
const router = express.Router();
const polylineController = require('../controllers/polylines');

router.post('/', polylineController.createPolyline);
router.get('/', polylineController.getPolylines);

module.exports = router;