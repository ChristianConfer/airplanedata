var express = require('express');
var router = express.Router();

var ctrlAirplanes = require('../controllers/airplane');

router.get('/flap/:flapid', ctrlAirplanes.flapReadOne)
router.get('/flapv/:flapvid', ctrlAirplanes.flapvReadOne)
router.get('/vfri/:vfriid', ctrlAirplanes.vfriReadOne)

module.exports = router;