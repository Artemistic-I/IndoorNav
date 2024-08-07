const express = require('express');
const router = express.Router();
const floorPlanController = require('../controllers/floorPlanController');
var multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

const upload = multer({ storage: storage });

// Route to create a new floor plan with image upload
router.post('/', upload.single('image'), floorPlanController.createFloorPlan);

// Route to get all floor plans
router.get('/', floorPlanController.getAllFloorPlans);

// Route to update a floor plan by order
router.put('/order/:order', floorPlanController.updateFloorPlanByOrder);

module.exports = router;
