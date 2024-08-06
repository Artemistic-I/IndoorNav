const FloorPlan = require('../models/floorplans');

exports.createFloorPlan = async (req, res) => {
    try {
        const { name, order } = req.body;
        const img = req.file ? `/images/uploads/${req.file.filename}` : '';
        const center = JSON.parse(req.body.center);

        const floorPlan = new FloorPlan({
            name,
            order,
            img,
            center
        });

        await floorPlan.save();
        res.status(201).send(floorPlan);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Method to get all floor plans
exports.getAllFloorPlans = async (req, res) => {
    try {
        const floorPlans = await FloorPlan.find();
        res.status(200).send(floorPlans);
    } catch (error) {
        res.status(500).send(error);
    }
};