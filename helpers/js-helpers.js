
function printPretty(msg, elm) {
    console.log(msg + ' = ' + JSON.stringify(elm));
}

module.exports = {
    printPretty: printPretty
};