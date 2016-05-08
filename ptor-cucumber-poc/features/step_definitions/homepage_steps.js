var support = require('../support');
 
var steps = function() {
 
  this.Given(/^I am on the homepage$/, function() {
    return support.get(this, 'http://adp.com', function(result){
      setTimeout(callback, 1000);
    });
  });
 
  this.Then(/^I should see a "([^"]*)" link$/, function(link) {
    return console.log('link', link);
    /*support.findByBinding(this, link, function(result){
      result.getText().then (function(text){
        text.trim().toLowerCase().should.equal(link.trim().toLowerCase());             
        setTimeout(callback, 1000);
      });     
    });*/
  });
 
  this.Then(/^I should not see a "([^"]*)" link$/, function(link) {
     return console.log('link', link);
    // support.isElementPresent(this, link, function(result){
    //   result.should.equal(false);
    //   setTimeout(callback, 1000);
    // });
  });
 
  this.Then(/^I should see a "([^"]*)"$/, function(link) {
     return console.log('link', link);
    // support.isElementPresentByClass(this, link, function(result){
    //   result.should.equal(true);
    //   setTimeout(callback, 1000);
    // });
  });
 
};
 
module.exports = steps;