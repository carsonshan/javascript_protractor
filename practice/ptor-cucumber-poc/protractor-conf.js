exports.config = {

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://google.com',

  directConnect: true,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: 'features/sampleSteps.js',
    format: 'summary'
  },

	onPrepare: function() {
		browser.ignoreSynchronization = true;		
	}
};
