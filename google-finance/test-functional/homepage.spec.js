/**
 * Created by ZSayed on 6/14/2015.
 */

var dow_jones = require('./../helpers/dow-jones');

browser.ignoreSynchronization = true;
describe('When the homepage is loaded', function() {
    beforeEach(function() {
        browser.get('https://www.google.com/finance');

    });

    it('should open dow jones asset', function() {
        element(dow_jones.djLink).click();
        expect(element(by.id('chart_anchor')).isDisplayed()).toBe(true);
    })
});