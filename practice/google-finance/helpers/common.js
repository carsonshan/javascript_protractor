/**
 * Created by ZSayed on 6/20/2015.
 */

function deepSleep(time) {
    browser.driver.sleep(time).then(function() {
        console.log('Deep Sleep function called.. ' + new Date());
    });

}

function printPretty(msg, elm) {
    console.log(msg + ' = ' + JSON.stringify(elm));
}


function waitObject(elm, timeout) {
    return browser.driver.wait(function() {
        return elm.isPresent().then(function(res) {
            return res;
        });
    }, timeout).then(null, function() {
        return false;
    });
}

module.exports = {
    deepSleep : deepSleep,
    printPretty : printPretty,
    waitObject : waitObject
};

