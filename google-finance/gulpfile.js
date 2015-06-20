var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');
var protractor = require('gulp-protractor').protractor;
//var webdriver = require('gulp-protractor').webdriver;
var spawn = require('child_process').spawn;

var argv = require('yargs').argv;



gulp.task('default', function() {
        console.log('Hello World!');
});

gulp.task('cl-test', function() {
        console.log('craigslist test.');
});

function webdriver() {
	gulp.spawn('webdriver-manager', ['start']);
};

var start = function() {
  spawn('C:/Users/zsayed/node_modules/.bin/webdriver-manager', ['start'], {
    stdio: 'inherit'
  }).once('close', '');
};

var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
    gulp.task('webdriver_standalone', webdriver_standalone);

// Setting up the test task
gulp.task('tester', function() {
    var myArgs = null;
    if(argv.suite == null || argv.suite == 'functional') {
        myArgs = './test-functional/dow-jones.spec.js';
    }
    else if(argv.suite == 'monitoring') {
        myArgs = './test-monitoring/*.spec.js';
    }
    console.log(myArgs);
    gulp.src(myArgs)
        .pipe(protractor({

        }));
});
