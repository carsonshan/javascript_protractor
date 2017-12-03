const faker = require('faker');

var randomizer = {
    randomName: function () {
        return faker.name.findName();
    },

    randomEmail: function() {
        return faker.internet.email();
    },

    randomCard: function () {
        return faker.helpers.createCard();
    }

};

module.exports = randomizer;

