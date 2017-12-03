const weatherTestBase = require('../helpers/services/openweather/weather-testbase.js');
const validate = require('../helpers/services/api-testbase');

describe('Open weather API', function () {
    var name, response;
    beforeEach(function () {
        name = "London";
        response = undefined;
    });
    describe('Check weather for London', function () {
        beforeEach(async function () {
            response = await weatherTestBase.getWeather(name, "uk")
                .then(resp => {
                    return resp;
                });
        });

        it('should not fail', function () {
            console.log('HERE"')
            validate.apiSuccess(response);
        });

        it('name should match', function () {
            expect(response.json.name).toBe("London");
        });
    });
});


