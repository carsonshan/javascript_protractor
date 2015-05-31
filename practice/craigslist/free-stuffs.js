/**
 * Created by ZSayed on 5/30/2015.
 */


function navigates() {
    browser.get('http://newyork.craigslist.org');
    console.log('NAVIGATES');
}

function search() {
    element(by.id('query')).sendKeys('Zakir');
    console.log('SEARCH');
}

function openFreeLink() {
    element(by.css('#sss1 > li:nth-child(2) > a')).click();
    console.log('OPEN FREE LINK');
}

function minMaxValue() {
    element(by.xpath('//*[@id="searchform"]/div[1]/div[2]/div[3]/input[1]')).sendKeys('30');
    element(by.xpath('//*[@id="searchform"]/div[1]/div[2]/div[3]/input[2]')).sendKeys('99');
    console.log('MIN MAX');
}

function submit() {
    element(by.css('#searchform > div.rightpane > div.querybox > button > span')).click();
    console.log('SUBMIT');
}

function allAction() {
    navigates();
    search();
    openFreeLink();
    minMaxValue();
    //submit();
}

module.exports = {
    navigates : navigates,
    search : search,
    submit : submit,
    openFreeLink : openFreeLink,
    minMaxValue : minMaxValue,
    allAction : allAction
}