/**
 * Created by ZSayed on 6/20/2015.
 */
fs = require('fs');

var jsonData;
function loadJSON() {
    console.log('loading json');
    fs.readFile('test-settings.json', 'utf8', function (err,data) {
        if (err) {
         //   console.log(err);
            jsonData = err;
        }
       // console.log(data);
        jsonData = data;
    //    console.log("PRINT + "  + JSON.stringify(data));
    });
}


function printTestSettings() {
    loadJSON();
    console.log('printing test setting json = ' + jsonData);
}

printTestSettings();
//loadJSON();