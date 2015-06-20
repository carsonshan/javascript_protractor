/**
 * Created by ZSayed on 6/13/2015.
 */

ddescribe('When in doubt use this script', function() {


    it('should print hello world', function() {
        console.log('Hello world from Protractor');
        expect(true).toBe(true);
    });

    it('should print the json content', function() {
        console.log(JSON.stringify(browser.params.testSettings));
    });

    it('should get values of aapl stock', function() {
       var jsonObj = browser.params.testSettings;
        console.log(jsonObj.stocks[0].desc);
        console.log(jsonObj.stocks.length);
    });
});