var express = require('express');
var router = express.Router();
// var ctrlLocations = require('../controllers/locations');
var ctrlAirplanes = require('../controllers/airplane');
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
router.get('/flap/:flapid', ctrlAirplanes.flapReadOne);
router.get('/flapv/:flapvid', ctrlAirplanes.flapvReadOne);
router.get('/vfri/:vfriid', ctrlAirplanes.vfriReadOne);

module.exports = router;
