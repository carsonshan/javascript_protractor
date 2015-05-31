/**
 * Created by ZSayed on 5/24/2015.
 */
//var $ = require('../../libs/jquery-2.1.4');
var Q = require('q')

function waitForElement() {
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

function printAnumber() {
    var deferobj = Q.defer();

    var num = null;

    setTimeout(function () {
        num = 2;
        deferobj.resolve(num);
    }, 3000);
    return deferobj.promise;
}

waitForElement().then(function(res) {
    console.log('res = ' + res);
});
