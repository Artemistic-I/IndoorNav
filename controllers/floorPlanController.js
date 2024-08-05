const FloorPlan = require('../models/floorplans');

exports.createFloorPlan = async (req, res) => {
    try {
        const { name, order } = req.body;
        const img = req.file ? `/images/uploads/${req.file.filename}` : '';

        const floorPlan = new FloorPlan({
            name,
            order,
            img
        });

        await floorPlan.save();
        res.status(201).send(floorPlan);
    } catch (error) {
        res.status(400).send(error);
    }
};
