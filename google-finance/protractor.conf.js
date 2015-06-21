/**
 * @author Zakir Sayed
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
/*	multiCapabilities: [ {
		'browserName': 'chrome'
	}],*/
    capabilities: {
        'browserName': 'phantomjs',

        /*
         * Can be used to specify the phantomjs binary path.
         * This can generally be ommitted if you installed phantomjs globally.
         */
        'phantomjs.binary.path': require('phantomjs').path,

        /*
         * Command line args to pass to ghostdriver, phantomjs's browser driver.
         * See https://github.com/detro/ghostdriver#faq
         */
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }
  ,
    specs: ['/test-functional/*.spec.js'],


    onPrepare: function() {
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            takeScreenShotsOnlyForFailedSpecs: false,
        }));
    },


    // ----- Options to be passed to minijasminenode -----
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 10000
    }
  
};