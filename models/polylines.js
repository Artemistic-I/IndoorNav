let mongoose = require('mongoose');

// Get schema class from mongoose
let Schema = mongoose.Schema;



// Define the schema for the model
let PolylineSchema = new Schema({
    paths: [[
        {lat: { type: Number, required: true }, lng: { type: Number, required: true }}
        ]],
    floornum: { type: Number, required: true }
});

// Configure the 'toObject' option for the schema to include getters
// and virtuals when converting to an object
//PolylineSchema.set('toObject', { getters: true, virtuals: true });

const Polyline = mongoose.model('Polyline', PolylineSchema);

module.exports = Polyline;