var sampleSteps = function() {

	this.Given(/^this is the first sample$/, function () {
	  return console.log("\n----Test started ----");
	});

	this.Given(/^this is the second sample$/, function () {
	  return console.log('this is second sample');
	});

	this.When(/^I am "([^"]*)" page$/, function (arg1) {
	  return browser.get(arg1);
	});

	this.Then(/^I should see "([^"]*)" in html$/, function (arg1) {
	  return $('html').getText().then(function(htmlText) {
	  //	browser.pause();
	  	return console.log('Text contains', htmlText);
	  });
	});

};

module.exports = sampleSteps;