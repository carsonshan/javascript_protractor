/**
 * Created by ZSayed on 6/14/2015.
 */

var dow_jones = require('../helpers/dow-jones');
var c = require('./../helpers/common');
var jsonObj = require('../test-data/test-settings.json');

describe('When dow jones page is loaded', function() {
    browser.ignoreSynchronization = true;
    beforeEach(function() {
        //browser.get('https://www.google.com/finance');
        //element(dow_jones.djLink).click();
    });

    function navStock(stock, stockName) {
        browser.get('https://www.google.com/finance?q=' + stock);
        var elmAppBar = element(by.css('div.appbar-snippet-primary'));
        dow_jones.loadElement(elmAppBar, 5000);
        expect(elmAppBar.isDisplayed()).toBe(true);
        expect(elmAppBar.getText()).toContain(stockName);
        c.deepSleep(1000);
    }

    it('Should load different stocks value', function() {
        console.log(jsonObj.stocks[0].symbol);

        //var arrStocks = ['AAPL', 'SD', 'MSFT', 'ORCL', 'YHOO'];
        //var arrName = ['Apple Inc', 'SandRidge', 'Microsoft', 'Oracle', 'Yahoo!'];

        for(var i=0; i<jsonObj.stocks.length; i++) {
            navStock(jsonObj.stocks[i].symbol, jsonObj.stocks[i].desc);
        }
        //for(var i=0; i<arrStocks.length; i++) {
        //    navStock(arrStocks[i], arrName[i]);
        //}
    });


    /*    it('should verify that 25 latest news items are loaded', function() {
            console.log('Verifying the news items count');
            expect(dow_jones.getNewsItemsCount()).toEqual(26);

        });*/
/*
    it('Should click on each index element', function() {
        //element(by.linkText('News')).click();
        //element(by.linkText('Historical prices')).click();
        //element(by.linkText('Summary')).click();
        dow_jones.clickOnEachTab();
    });*/

/*    it('should print the content of all news item', function() {
        //dow_jones.loadElement(element(by.css('#news_div_cont')));
        //browser.driver.sleep(8000);
        dow_jones.printNewsContent();
    });*/

});