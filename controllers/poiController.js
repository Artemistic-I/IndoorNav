const Poi = require('../models/pois');

exports.createPoi = async (req, res) => {
    try {
        console.log(req.body);
        const { name, category } = req.body;
        const floornum = req.body.floornum;
        const position = JSON.parse(req.body.position);
        const newPoi = new Poi({
            name,
            category,
            floornum,
            position
        });

        await newPoi.save();
        res.status(201).json(newPoi);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getAllPoi = async (req, res) => {
    try {
        const pointsOfInterest = await Poi.find();
        res.status(200).json(pointsOfInterest);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};