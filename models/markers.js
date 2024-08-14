const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    floornum: {
        type: Number,
        required: true,
    },
    position: {
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
    },
});

markerSchema.set('toObject', { getters: true, virtuals: true });

const Marker = mongoose.model('Marker', markerSchema);

module.exports = Marker;