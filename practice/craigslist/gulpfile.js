var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');
var protractor = require('gulp-protractor').protractor;
var webdriver = require('gulp-protractor').webdriver;




gulp.task('default', function() {
        console.log('Hello World!');
});

gulp.task('cl-test', function() {
        console.log('craigslist test.');
});

// Setting up the test task
gulp.task('protractor', function() {
//    webdriver();
    setTimeout(function () {
        gulp.src(['*.spec.js']).pipe(protractor({
            configFile: 'protractor.conf.js'
        }));
    }, 10000);
});
