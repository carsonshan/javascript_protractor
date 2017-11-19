'use strict';
var path = require('path');
var log4js = require('log4js');
log4js.configure({ appenders: [ { type: 'console', layout: { type: 'basic' } } ], replaceConsole: false });
var logger = log4js.getLogger('Redbox regexUtil');
logger.setLevel('INFO');
/**
 Utility regex patterns for various currency patterns
 */

global.regexUtil = {};


/**
 *
 * @type {RegExp}
 * Matches any US currency pattern to $0.00 or any positive number with dollar symbol, see below for some examples
 * Examples:
 * $1,000
 * $0.00
 * $10.00
 * $100,000.00
 */
global.regexUtil.positiveCurrencyPattern = /^\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2})?$/;


/**
 * @type {RegExp}
 * Matches any US currency patter as above but expects 4 decimals places
 **/
global.regexUtil.payRatePattern = /^\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2,4})?$/;



/**
 *
 * @type {RegExp}
 * Matches any US currency pattern to $0.00 or any negative number with dollar symbol, see below for some examples
 * Examples:
 * $0.00
 * -$6.00
 * -$1,000.00
 * -$100,000.00
 */

global.regexUtil.negativeCurrencyPattern = /(^\$0\.00$)|^-\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0\.[0-9]{2})?(\.[0-9]{2})?$/;


/**
 *
 * @type {RegExp}
 * Matches any US currency pattern positive number without dollar symbol
 * Examples:
 * 0.00
 * 10.00
 * 1,000.00
 */
global.regexUtil.currencyPatternWithoutDollarSymbol = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2})?$/;


/**
 *
 * @type {RegExp}
 * Matches masked bank account number. Should mask the last four digits or display only four digits if the account is four digits long.
 * Examples:
 * 1234
 * xxx1223
 * xxxxxx1234
 */
global.regexUtil.maskedAccountNumberPattern = /^(\([x]*[0-9]{4}\))$|^(\([0-9]{4}\))$/;


/**
 * @type {RegexExp}
 * Matches falsey values
 */

global.regexUtil.falseyPattern = /(undefined)|(null)|('')|(\[\])|(\{\})/;

/**
 * @type {RegexExp}
 * Matches percentage
 */

global.regexUtil.percentPatern = /^[0-9]{0,3}%$/;

// TESTS
// TODO: Move to its own file and use Jasmine


if (process.argv[1].split(path.separator).pop() === __filename) {

  var testMatch = function (string, pattern) {
    if (!string.match(pattern)) {
      logger.info(string + ' didn\'t match pattern: ' + pattern);
    }
  };

  var testNotMatch = function (string, pattern) {
    if (string.match(pattern)) {
      logger.info(string + ' matched pattern (and should not have) : ' + pattern);
    }
  };

  var testMaskedAccountNumberPattern = function () {
    logger.info('------Masked Account Number pattern------');
    testMatch('(1234)', regexUtil.maskedAccountNumberPattern);
    testMatch('(xx1245)', regexUtil.maskedAccountNumberPattern);
    testMatch('(x3564)', regexUtil.maskedAccountNumberPattern);
    testMatch('(xxxxxx1234)', regexUtil.maskedAccountNumberPattern);

    testNotMatch('1234xxx', regexUtil.maskedAccountNumberPattern);
    testNotMatch('(1234xxx', regexUtil.maskedAccountNumberPattern);
    testNotMatch('1234xxx)', regexUtil.maskedAccountNumberPattern);
    testNotMatch('xxx14234', regexUtil.maskedAccountNumberPattern);
    testNotMatch('1234aadfda', regexUtil.maskedAccountNumberPattern);
    testNotMatch('xxxx12x34', regexUtil.maskedAccountNumberPattern);
    testNotMatch('345431234', regexUtil.maskedAccountNumberPattern);
  };

  var testPostiveCurrencyNoDollarSymbolePattern = function () {
    logger.info('------No dollar symbol pattern------');
    testMatch('0.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testMatch('1,000', regexUtil.currencyPatternWithoutDollarSymbol);
    testMatch('100,000.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testMatch('3.00', regexUtil.currencyPatternWithoutDollarSymbol);

    testNotMatch('-4.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-6,000', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-0.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-,000', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-$1,000aa', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-$1,000 aa', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('-$1,0009.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('$1,000aa', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('$1,000 aa', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('$1,0009.00', regexUtil.currencyPatternWithoutDollarSymbol);
    testNotMatch('5.0', regexUtil.currencyPatternWithoutDollarSymbol);
  };

  var testPositiveCurrencyPattern = function () {
    logger.info('------Positive currency test------');
    testMatch('$1,000', regexUtil.positiveCurrencyPattern);
    testMatch('$100,000', regexUtil.positiveCurrencyPattern);
    testMatch('$1,000.00', regexUtil.positiveCurrencyPattern);
    testMatch('$1.00', regexUtil.positiveCurrencyPattern);
    testMatch('$15.67', regexUtil.positiveCurrencyPattern);
    testMatch('$0.00', regexUtil.positiveCurrencyPattern);

    testNotMatch('0', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$0.00', regexUtil.positiveCurrencyPattern);
    testNotMatch('$0.00aa', regexUtil.positiveCurrencyPattern);
    testNotMatch('$0.00 aaa', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$6.78', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$1,000', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$,000', regexUtil.positiveCurrencyPattern);
    testNotMatch('-,000', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$1,000aa', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$1,000 aa', regexUtil.positiveCurrencyPattern);
    testNotMatch('-$1,0009.00', regexUtil.positiveCurrencyPattern);
    testNotMatch('$1,000aa', regexUtil.positiveCurrencyPattern);
    testNotMatch('$1,000 aa', regexUtil.positiveCurrencyPattern);
    testNotMatch('$1,0009.00', regexUtil.positiveCurrencyPattern);
    testNotMatch('$5.0', regexUtil.positiveCurrencyPattern);
  };

  var testNegativeCurrencyPattern = function () {
    logger.info('------Negative currency test------');
    testMatch('-$6.78', regexUtil.negativeCurrencyPattern);
    testMatch('-$1,000', regexUtil.negativeCurrencyPattern);
    testMatch('$0.00', regexUtil.negativeCurrencyPattern);
    testMatch('-$0.60', regexUtil.negativeCurrencyPattern);

    testNotMatch('0', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1,000', regexUtil.negativeCurrencyPattern);
    testNotMatch('$100,000', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1,000.00', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1.00', regexUtil.negativeCurrencyPattern);
    testNotMatch('$15.67', regexUtil.negativeCurrencyPattern);
    testNotMatch('-,000', regexUtil.negativeCurrencyPattern);
    testNotMatch('-$1,000aa', regexUtil.negativeCurrencyPattern);
    testNotMatch('-$1,000 aa', regexUtil.negativeCurrencyPattern);
    testNotMatch('-$1,0009.00', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1,000aa', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1,000 aa', regexUtil.negativeCurrencyPattern);
    testNotMatch('$1,0009.00', regexUtil.negativeCurrencyPattern);
    testNotMatch('$5.0', regexUtil.negativeCurrencyPattern);

    // TODO: Ideally this would pass
    // testNotMatch('-$0.00', regexUtil.negativeCurrencyPattern);
  };

  testPositiveCurrencyPattern();
  testNegativeCurrencyPattern();
  testPostiveCurrencyNoDollarSymbolePattern();
  testMaskedAccountNumberPattern();
}

