var mongoose = require('mongoose');

var runwaysSchema = new mongoose.Schema({
    runway: String,
	runwayHeadingMagnetic: Number,
	runwayHeadingTrue: Number,
	runwayLength: Number
});

var airportsSchema = new mongoose.Schema({
    airportName: String,
	iataCode: String,
	icaoCode: String,
	lat: Number,
	long: Number,
    runways: [runwaysSchema]
});

mongoose.model('Airport', airportsSchema, "airports");