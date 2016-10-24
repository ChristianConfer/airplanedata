var mongoose = require('mongoose');

var VFRISchema = new mongoose.Schema({
    weight: Number,
	flap5: Number,
	flap10: Number,
	flap15: Number,
	vclmb: Number
});

var FlapvSchema = new mongoose.Schema({
    setting: String,
    weight: Number,
	altitude: Number,
	Vr: Number,
	V2: Number,
	above20cOAT: Boolean
});

var FlapSchema = new mongoose.Schema({
    setting: String,
    weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

mongoose.model('Vfri', VFRISchema, 'vfri');
mongoose.model('Flapv', FlapvSchema, 'flapv');
mongoose.model('Flap', FlapSchema, 'flap');