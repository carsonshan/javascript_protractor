/**
 * @author Zakir Sayed
 * Craigslist navigation test
 */

var OpenCraigslist = function() {
	//this.sURL = "http://newyork.craigslist.org";
	//this.topBanner = element(by.css('.no-mobile');
	
	this.navigates = function() {
		browser.get('http://newyork.craigslist.org');
	};
	
};

//var pageObject = require('./navigate.js');
describe('Run craigslist program.', function() {
	browser.ignoreSynchronization = true;
  	it('Open craigslist page', function() {
		console.log('opening CL page');
		//browser.get('http://newyork.craigslist.org/');
		var clPage = new OpenCraigslist();
        clPage.navigates();
        expect(true).toBe(true);
	});
});

/*
  describe('angularjs home page', function() {
  var angularPage = require('./angularsite_page.js');

  beforeEach(function() {
    angularPage.navigate();
  })

  it('should show localization info in the tabs', function() {
    expect(angularPage.usTabContent.getText()).toMatch('Number: 98,765.432');
  });

  it('should switch to the pluralization tab', function() {
    angularPage.tabs.get(1).click();
    expect(angularPage.usTabContent.getText()).toMatch('no beers');
  });
});
*/