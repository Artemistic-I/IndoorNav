// controllers/markerController.js
const Marker = require('../models/markers');
const Polyline = require("../models/polylines");

// Save a new marker
exports.saveMarker = async (req, res) => {
    try {
        console.log(req.body);
        const { name, category} = req.body;
        console.log(name, category);
        const floornum = req.body.floornum;
        console.log(floornum);
        const position = req.body.position;
        console.log(position);

        const marker = new Marker({
            name,
            category,
            floornum,
            position,
        });

        await marker.save();
        res.status(201).send(marker);
    } catch (error) {
        res.status(400).send({ message: 'Error saving marker', error });
    }
};

// Retrieve all markers
exports.getAllMarkers = async (req, res) => {
    try {
        const markers = await Marker.find();
        res.status(200).send(markers);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving markers', error });
    }
};

exports.deleteMarker = async (req, res) => {
    try {
        const { lat, lng, floornum } = req.body;

        if (lat === undefined || lng === undefined || floornum === undefined) {
            return res.status(400).send({ message: 'Latitude, longitude, and floor number are required' });
        }

        const result = await Marker.deleteOne({
            'position.lat': lat,
            'position.lng': lng,
            floornum: floornum
        });

        if (result.deletedCount === 0) {
            return res.status(404).send({ message: 'Marker not found' });
        }

        res.status(200).send({ message: 'Marker deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting marker', error });
    }
};
