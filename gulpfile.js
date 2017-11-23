var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var protractor = require('gulp-protractor').protractor;
var argv = require('yargs').argv;

gulp.task('default', function () {
   return console.log('GULP default task');
});

gulp.task('test-e2e', function () {
    var specArgs = 'aut/aut/*.spec.js';
    if(argv.aut) specArgs = 'aut/' + argv.aut + '/*.spec.js';
    return gulp.src(specArgs)
        .pipe(protractor({
            configFile: 'protractor-conf.js'
        }));
});

gulp.task('test-tests-api', function () {
    var specArgs = 'tests-api/sample.spec.js';
    if(argv.spec) specArgs = argv.spec;
    return gulp.src(specArgs)
        .pipe(jasmine());
});