/**
 * Created by ZSayed on 5/30/2015.
 */


function navigates() {
    console.log('NAVIGATES');
    return browser.get('http://newyork.craigslist.org/');
}

function search() {
    console.log('SEARCH');
    return element(by.id('query')).sendKeys('Zakir');
}

function openFreeLink() {
    console.log('OPEN FREE LINK');
    return element(by.css('#sss1 > li:nth-child(2) > a')).click();
}

function minMaxValue() {
    console.log('MIN MAX');
    return element(by.xpath('//*[@id="searchform"]/div[1]/div[2]/div[3]/input[1]')).sendKeys('30').then(function() {
        return element(by.xpath('//*[@id="searchform"]/div[1]/div[2]/div[3]/input[2]')).sendKeys('99');
    });
}

function submit() {
    console.log('SUBMIT');
    browser.driver.sleep(5000);
    return element(by.css('#searchform > div.rightpane > div.querybox > button > span')).click();
}

function allAction() {
    navigates()
        .then(search())
        .then(openFreeLink())
        .then(minMaxValue())
        .then(submit())
        .then(function() {
            console.log('All done');
        });
}

module.exports = {
    navigates : navigates,
    search : search,
    submit : submit,
    openFreeLink : openFreeLink,
    minMaxValue : minMaxValue,
    allAction : allAction
}