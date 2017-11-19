var DEEP_SLEEP = 15000;

function deepSleep() {
    return sleep(DEEP_SLEEP);
}

function sleep(time) {
    return browser.driver.sleep(time).then(function() {
        console.log('Deep Sleep function called.. ' + new Date());
    });
}

module.exports = {
    deepSleep: deepSleep,
    sleep: sleep
}