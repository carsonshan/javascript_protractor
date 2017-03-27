exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  
  specs: [
    'e2e/features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'cucumber',

};
