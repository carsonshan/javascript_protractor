/**
 * Created by ZSayed on 5/22/2015.
 */
var testloop = require('./simple-promises');
var MAX_COUNT = 2;

describe('When the loop is used: ', function() {
    var tabOverview = element(by.id('forum_nav_overview1'));
    var recentItems = by.css('div.item');
    browser.ignoreSynchronization = true;

    beforeEach(function() {
        browser.get('http://support.thoughtworks.com/categories/20001026-Twist-Community-Support#recent');
    });

    //it('Should print the value of count without object/promise', function() {
    //    var iCount = testloop.looper(MAX_COUNT);
    //    expect(iCount).toBe(MAX_COUNT);
    //});

    it('Should print the value of count with object/promises', function() {
        var res = false;
       for(var i=0; i<5; i++) {
           res = tabOverview.isPresent();
           if(res) {
               console.log('Exiting1 from FOR LOOP');
               break;
           }
           else {
               browser.driver.sleep(1000);
               console.log('Sleeping the thread..');
           }
       }


       expect(tabOverview.isDisplayed()).toBe(true);
       // testloop.waitForElement(element(tabOverview), 15).then(function(res) {
       //     expect(res).toBe(true);
       // });

        //console.log('printanumber = ' + testloop.printAnumber());

        //expect(testloop.waitForElement(tabOverview, 15)).toBe(true);
        //browser.driver.sleep(4000);
        //var allItems = element.all(recentItems);
        //expect(allItems.count()).toBe(30);
        //
        //element.all(recentItems).count().then(function(i) {
        //    expect(i).toBe(30);
        //});

    });

});
