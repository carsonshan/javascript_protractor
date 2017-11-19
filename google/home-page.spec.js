/**
 * Created by zak on 11/19/17.
 */
var EC = require('../waiter/ec-extended').EC;
var po = require('../page-objects/po-google-homepage');

describe('google homepage', function () {
    var searcHTextbox = po.searchbox;
    beforeEach(function () {
        browser.get('http://google.com')
    });

    it('search textbox is visible', function () {
        browser.wait(EC.presenceOf(searcHTextbox), 5000);
        expect(searcHTextbox.isPresent()).toBe(true);
    });

    describe('user search', function () {
        it('validate search for zakir keyword', function () {

        });

        it('validate i am lucky search for zakir keyword', function () {

        });
    })

});