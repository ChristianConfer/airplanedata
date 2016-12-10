var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controllers/airplane');

/* Locations pages */
router.get('/', ctrlAirplane.showData);

module.exports = router;
