var mongoose = require('mongoose');
var Airports = mongoose.model('Airport');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.airport = function(req, res) {
  console.log('Finding airport details', req.params);
  if (req.params && req.params.airportid) {
      console.log('The airportid', req.params.airportid);
    Airports
      .findById(req.params.airportid)
      .exec(function(err, flap) {
        if (!flap) {
            console.log("We fail here");
          sendJSONresponse(res, 404, {
            "message": "airportid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  } else {
    Airports.find({}, null, function (err, flap) {
        if (!flap) {
            console.log("We fail here");
          sendJSONresponse(res, 404, {
            "message": "airports were not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  }
};