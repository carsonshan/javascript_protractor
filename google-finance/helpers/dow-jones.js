/**
 * Created by ZSayed on 6/14/2015.
 */
browser.ignoreSynchronization = true;

var djLink = by.xpath("//a[contains(text(), 'Dow Jones')]");
var djValue = by.css('#sfe-mktsumm tr td:nth-child(3) span');
var allNewsItem = by.css('#news_div_cont div.news-item');

function loadElement(elm) {
    browser.wait(function() {
        return browser.isElementPresent(elm);
    }, 8000);
    console.log('loadElement function called');
}

function getDJvalue() {
    return element(djValue).getText().then(function(num) {
       return Number(num.replace(',', ''));
    });
}

function getNewsItemsCount() {
    loadElement(element(by.css('#news_div_cont')));
    var elems = element.all(allNewsItem).count();
    return elems;
}

function printNewsContent() {
    console.log('Iterating through elements array');
    loadElement(element(by.css('#news_div_cont')));
    element.all(allNewsItem).then(function(itemsArray) {
        var i=1;
        for(var i=1; i < itemsArray.length(); i++) {
            //#news_div_cont div.news-item:nth-child(2) .cluster a.title
            newsitem = element(by.css('#news_div_cont div.news-item:nth-child(' + i + ') .cluster a.title'));
            newsitem.getText().then(function(value) {
                console.log('Link value = ' + value);
            });
        }

    });
}

module.exports = {
    djLink : djLink,
    getDJvalue : getDJvalue,
    getNewsItemsCount : getNewsItemsCount(),
    printNewsContent : printNewsContent(),
    loadElement : loadElement()
};