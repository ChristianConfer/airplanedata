var express = require('express');
var router = express.Router();
// var ctrlLocations = require('../controllers/locations');
var ctrlAirport = require('../controllers/airport');
// var ctrlReviews = require('../controllers/reviews');

// router.get('/locations', ctrlLocations.locationsListByDistance);
// router.post('/locations', ctrlLocations.locationsCreate);
// router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
// router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// //reviews
// router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

//airplane
router.get('/airport/:airportid', ctrlAirport.airport)
router.get('/airport/', ctrlAirport.airport)


module.exports = router;
