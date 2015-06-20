/**
 * @author Zakir Sayed
 */
exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
/*	multiCapabilities: [ {
		'browserName': 'chrome'
	}]*/
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

   params: {
       testSettings : require('./test-settings.json')
},

  onPrepare: function() {
    var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
    var mkdirp = require('mkdirp');
    var newFolder = "./reports/" + folderName;
    require('jasmine-reporters');

    mkdirp(newFolder, function(err) {
      if (err) {
        console.error(err);
      } else {
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(newFolder, true, true));
      }
    });
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  }
  
};