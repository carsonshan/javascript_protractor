/**
 * Created by ZSayed on 5/30/2015.
 */


describe('When one then is complete ', function() {
    var clPage = require('./free-stuffs');
    browser.ignoreSynchronization = true;

    it('should work one after another', function() {
        clPage.navigates();
        clPage.search();
        clPage.openFreeLink();
        clPage.minMaxValue();
        clPage.submit();
        console.log('--------All is done--------');

    });

    it('Check to see if it resolves the promise itself', function() {
        clPage.allAction();
        console.log('--------All is done--------');
    })



});