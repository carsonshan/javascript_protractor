const apiTestBase = require('../api-testbase');
const path = require('../paths/openweather-paths');
const apiKey = require('../../..//resources/config/api-keys.json');

module.exports.getWeather = function(city, country) {
    let uri = path.GET_WEATHER + "?q=" + city + "," + country + "&appId=" + apiKey.openweather;
    return apiTestBase.getRequestByUrl(uri);
};
