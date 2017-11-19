var faker = require('faker');

function randomName() {
    return faker.name.findName();
}

function randomEmail() {
    return ffaker.internet.email();
}

function randomCard() {
    return faker.helpers.createCard();
}

module.exports = {
    randomName : randomName,
    randomEmail : randomEmail,
    randomCard : randomCard
};
