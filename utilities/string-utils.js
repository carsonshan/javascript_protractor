function extractNumbers(alphaNumeric) {
    return alphaNumeric.match(/\d+/)[0];
}

module.exports = {
    extractNumbers: extractNumbers
}