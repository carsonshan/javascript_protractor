/**
 * Created by ZSayed on 5/22/2015.
 */

function looper(finalCount) {
    for (var i = 0; i < finalCount; i++) {
        console.log('printing from looper: ' + i);
    }
    return i;
}

function isElementExists(ele) {
    ele.isPresent().then(function (bValue) {
        if (bValue) {
            console.log('value found i = ' + i);
            return true;
        }
        else {
            console.log('sleep executed: ' + i);
            browser.driver.sleep(1000);
            return false;
        }
    });
}

function waitForElement(ele, timeout) {
    var res = false;
    for (var i = 0; i < 8; i++) {
        console.log('i = ' + i);
        isElementExists(ele).then(function(value) {
            if(value) {
                console.log('Existing from for loop');
                res = true;
                //break;
            }
        });

    }
    return res;
}

var Q = require('q')

function waitForElement1() {
    var defobj = Q.defer();
    var i=0;
    var myTime = setInterval(function(){
        console.log('print from set interval');
        if(i > 5) {
            clearInterval(myTime);
            defobj.resolve(i);
        }
        i++;
    }, 1000);

    return defobj.promise;
}


//
//function waitForElement(waitLoading, timeout) {
//    var res = false;
//
//   // var waitLoading = by.css('#loading.loader-state-hidden');
//
//    return browser.wait(function() {
//        return browser.isElementPresent(waitLoading);
//    }, 8000);
//
//
//}

function add2numbers(n1, n2) {
    return n1 + n2;
}

function printAnumber() {
    var num = null;

    browser.wait(function() {
        num = 4;
    }, 4000);

    return num;
}




module.exports = {
    printAnumber : printAnumber,
    add2numbers : add2numbers,
    looper: looper,
    waitForElement : waitForElement
}