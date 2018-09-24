var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'mapquest',
 
  // // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey:	process.env.GROUP_PROJECT_GEOCODER_CONSUMER_KEY
};

const GeocoderHelper = function(){

};

var geocoder = NodeGeocoder(options);

GeocoderHelper.prototype.getLocationData = function(tweetLocation){
  return new Promise((resolve, reject) => {
    geocoder.geocode(tweetLocation)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      }) 
    })
  }

module.exports = (GeocoderHelper);