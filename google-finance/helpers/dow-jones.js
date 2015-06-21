/**
 * Created by ZSayed on 6/14/2015.
 */
browser.ignoreSynchronization = true;

var djLink = by.xpath("//a[contains(text(), 'Dow Jones')]");
var djValue = by.css('#sfe-mktsumm tr td:nth-child(3) span');
var allNewsItem = by.css('#news_div_cont div.news-item');

function printPretty(text, elmObj) {
    console.log(text + ' = ' + JSON.stringify(elmObj));
}

function loadElement(elm, timeout) {
    browser.driver.wait(function() {
        return browser.isElementPresent(elm);
    }, timeout).then(function() {
        console.log('loadElement function called');
    });

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
    var i=1;
    console.log('Iterating through elements array');
    loadElement(element(by.css('#news_div_cont')));
    element.all(allNewsItem).map(function(itemsArray) {
            //#news_div_cont div.news-item:nth-child(2) .cluster a.title
            newsitem = element(by.css('#news_div_cont div.news-item:nth-child(' + i++ + ') .cluster a.title'));
            newsitem.getText().then(function(value) {
                console.log('Link value = ' + value);
            });
        });
}

function link1() {
    element(by.linkText('News')).click().then(function() {
        console.log('from link1 = ' + new Date());
    });

}

function link2() {
    element(by.linkText('Historical prices')).click().then(function() {
        console.log('from link2 = ' + new Date());
    })
}

function link3() {
    element(by.linkText('Summary')).click().then(function() {
        console.log('from link3 = ' + new Date());
    })
}

function clickOnEachTab() {
        link1();
        link2();
        link3();
    element(by.linkText('News')).click();
    element(by.linkText('Historical prices')).click();
    element(by.linkText('Summary')).click();
}
/*

function clickOnEachTab() {
    var flow = protractor.promise.controlFlow();
    flow.execute(link1());
    flow.execute(element(by.linkText('Historical prices')).click());
    flow.execute(element(by.linkText('Summary')).click());
    console.log("I am here");
}
*/

module.exports = {
    printPretty : printPretty,
    djLink : djLink,
    getDJvalue : getDJvalue,
    getNewsItemsCount : getNewsItemsCount,
    printNewsContent : printNewsContent,
    loadElement : loadElement,
    clickOnEachTab : clickOnEachTab
};