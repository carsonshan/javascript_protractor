/**
 * Created by ZSayed on 6/14/2015.
 */

var dow_jones = require('./../helpers/dow-jones');
var c = require('./../helpers/common');

var elmExists = element(by.id('secperf'));
var elmNotExists = element(by.css('.zakir'));


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

    describe('Here is the looper', function() {
        for(var i=0; i<5; i++) {
          it('should expect 2 to be 2', function() {
               expect(2).toBe(2);
               expect(4).toBe(4);
          });
        }
    });



    function waitObject(elm, timeout) {
        return browser.driver.wait(function() {
            return elm.isPresent().then(function(res) {
                return res;
            });
        }, timeout);

    }

    it('Check to see if the object exists', function() {
        console.log(waitObject(elmExists, 2000));
//        console.log(waitObject(elmNotExists, 2000));

    });

    it('should open dow jones asset', function() {
        element(dow_jones.djLink).click();
        expect(element(by.id('chart_anchor')).isDisplayed()).toBe(true);
    });


    it('should get content of all elements in a table', function() {
        element.all(by.css('div.bld')).each(function(elm) {
            elm.getText().then(function(value) {
                c.printPretty('index', value);
            });

        });
    });


});