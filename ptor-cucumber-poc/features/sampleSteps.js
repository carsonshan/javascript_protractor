var sampleSteps = function() {

	this.Given(/^this is the first sample$/, function (callback) {
	  console.log("\n----" + this.prop);
	  callback();
	});

	this.Given(/^this is the second sample$/, function (callback) {
	  this.greetings("everybody", callback);
	});

	this.When(/^I am "([^"]*)" page$/, function (arg1, callback) {
	  browser.get(arg1);
	  callback();
	});

	this.Then(/^I should see "([^"]*)" in html$/, function (arg1, callback) {
	  $('html').getText().then(function(htmlText) {
	  	browser.pause();
	  	console.log('Text contains', htmlText);
	  });
	  callback();
	});

};

module.exports = sampleSteps;