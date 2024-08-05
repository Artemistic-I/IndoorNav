const mongoose = require('mongoose');

const FloorPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    order: { type: Number, required: true },
    img: { type: String, required: true }
});

const FloorPlan = mongoose.model('FloorPlan', FloorPlanSchema);

module.exports = FloorPlan;