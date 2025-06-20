const FloorPlan = require('../models/floorplans');

exports.createFloorPlan = async (req, res) => {
    try {
        const { name, order } = req.body;
        const img = req.file ? `/images/uploads/${req.file.filename}` : '';
        const center = JSON.parse(req.body.center);
        const rotation = req.body.rotation;
        const corners = JSON.parse(req.body.corners);

        const floorPlan = new FloorPlan({
            name,
            order,
            img,
            center,
            rotation,
            corners
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
exports.updateFloorPlanByOrder = async (req, res) => {
    try {
        const { order } = req.params;
        const { rotation, corners } = req.body;

        const updatedFloorPlan = await FloorPlan.findOneAndUpdate(
            { order: parseInt(order) }, // Ensure order is parsed as an integer
            {
                rotation: parseFloat(rotation), // Ensure rotation is parsed as a float
                corners: JSON.parse(corners)
            },
            { new: true }
        );

        if (!updatedFloorPlan) {
            return res.status(404).send({ message: 'Floor plan not found' });
        }

        res.status(200).send(updatedFloorPlan);
    } catch (error) {
        res.status(400).send(error);
    }
};