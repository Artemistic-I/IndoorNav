const Polyline = require('../models/polylines');

exports.createPolyline = async (req, res) => {
    try {
        const polyline = new Polyline(req.body);
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