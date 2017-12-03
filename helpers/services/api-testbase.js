const frisby = require('frisby');

var apiTestBase = {
    getRequestByUrl: function (url) {
        return frisby.get(url)
    },
    apiSuccess: function (response) {
        console.log('response', response);
        expect(response.json.cod).toBe(200);
    }
};

// var validate = {
//     apiSuccess: function (response) {
//         response.expect('status', 200);
//     }
// };

// module.exports = {
//     validate: validate
// };

module.exports = apiTestBase;