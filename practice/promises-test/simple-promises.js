/**
 * Created by ZSayed on 5/22/2015.
 */

function looper() {
    for (var i = 0; i < 5; i++) {
        console.log('printing from looper: ' + i);
    }
}

module.exports = {
    looper: looper
}