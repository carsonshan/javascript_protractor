var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  specs: [
    'aut/google/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://google.com',

  directConnect: true,

	onPrepare: function() {
		browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target'
            })
        );
	}
};
