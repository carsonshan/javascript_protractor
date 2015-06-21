var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');
var protractor = require('gulp-protractor').protractor;
//var webdriver = require('gulp-protractor').webdriver;
var spawn = require('child_process').spawn;





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
    
        gulp.src(['*.spec.js']).pipe(protractor({
        	//seleniumAddress: 'http://localhost:4444/wd/hub'
            configFile: 'protractor.conf.js'
        }));
});
