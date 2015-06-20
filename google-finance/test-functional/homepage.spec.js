/**
 * Created by ZSayed on 6/14/2015.
 */

var dow_jones = require('./../helpers/dow-jones');
var c = require('./../helpers/common');

browser.ignoreSynchronization = true;
describe('When the homepage is loaded', function() {
    var isLoaded = false;
    beforeEach(function() {
        if(!isLoaded) {
            browser.get('https://www.google.com/finance');
            var elmSector = element(by.id('secperf'));
            dow_jones.loadElement(elmSector, 5000);
            isLoaded = true;
        }

    });

/*
    it('should open dow jones asset', function() {
        element(dow_jones.djLink).click();
        expect(element(by.id('chart_anchor')).isDisplayed()).toBe(true);
    });*/

/*

    it('should get content of all elements in a table', function() {
        element.all(by.css('div.bld')).each(function(elm) {
            elm.getText().then(function(value) {
                c.printPretty('index', value);
            });

        });
    });
*/


});