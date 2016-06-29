exports.config = {

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://google.com',

  framework: 'cucumber',

	onPrepare: function() {
		browser.ignoreSynchronization = true;		
	}
};
