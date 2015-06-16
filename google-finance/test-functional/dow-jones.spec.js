/**
 * Created by ZSayed on 6/14/2015.
 */

var dow_jones = require('../helpers/dow-jones');
ddescribe('When dow jones page is loaded', function() {
    browser.ignoreSynchronization = true;
    beforeEach(function() {
        browser.get('https://www.google.com/finance');
        element(dow_jones.djLink).click();
    });

/*
    it('should verify that 25 latest news items are loaded', function() {
        console.log('Verifying the news items count');
        expect(dow_jones.getNewsItemsCount).toEqual(26);

    });
*/
    it('should print the content of all news item', function() {
        //dow_jones.loadElement(element(by.css('#news_div_cont')));
        //browser.driver.sleep(8000);
        dow_jones.printNewsContent;
    });
});