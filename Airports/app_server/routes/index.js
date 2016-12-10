var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controllers/airplane');

/* Locations pages */
router.get('/', ctrlAirplane.angularApp);
router.get('/airport/:locationid', ctrlAirplane.airportInfo);

module.exports = router;
