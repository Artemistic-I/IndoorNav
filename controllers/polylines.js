const Polyline = require('../models/polylines');

exports.createPolyline = async (req, res) => {
    try {
        const { paths, floornum } = req.body;

        const polyline = new Polyline({
            paths,
            floornum
        });
        await polyline.save();
        res.status(201).send(polyline);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getPolylines = async (req, res) => {
    try {
        const polylines = await Polyline.find();
        res.status(200).send(polylines);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.clearPolylines = async (req, res) => {
    try {
        const { floornum } = req.params; // Extract the floornum from the request parameters

        if (!floornum) {
            return res.status(400).send({ message: 'Floor number is required' });
        }

        await Polyline.deleteMany({ floornum: floornum }); // Delete only the polylines with the specified floornum

        res.status(200).send({ message: `Polylines with floornum ${floornum} removed` });
    } catch (error) {
        res.status(500).send(error);
    }
};