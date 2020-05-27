const fs = require('fs');
let rawdata = fs.readFileSync('./testData/DefaultAccountData.json');
let defaultAccountData = JSON.parse(rawdata);

let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

let HtmlReporter = require('nightwatch-html-reporter');
let reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: './tests_output',
    themeName: 'default',
});

module.exports = {

    // default account data that will be used in the tests
    defaultAccountData: defaultAccountData,

    // just a logger in the addition to the default one
    logger: logger,

    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 10000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: false,

    // By default a warning is printed if multiple elements are found using the given locate strategy
    // and selector; set this to true to suppress those warnings
    suppressWarningsOnMultipleElementsReturned: false,

    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,

    // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
    // or an error is thrown
    unitTestsTimeout: 2000,

    // controls the timeout value for when executing the global async reporter. Expects the done() callback to be 
    // invoked within this time or an error is thrown
    customReporterCallbackTimeout: 20000,

    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions 
    // until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 5000,

    reporter: reporter.fn,

    // Custom method for logging info messages to have the right order of log messages in console
    logInfo: function (browser, message) {
        browser.perform(function () {
            logger.info(message);
        });
    },

    // Custom method for logging debug messages to have the right order of log messages in console
    logDebug: function (browser, message) {
        browser.perform(function () {
            logger.debug(message);
        });
    },

    // Custom method for logging trace messages to have the right order of log messages in console
    logTrace: function (browser, message) {
        browser.perform(function () {
            logger.trace(message);
        });
    },

    // Custom method for logging warn messages to have the right order of log messages in console
    logWarn: function (browser, message) {
        browser.perform(function () {
            logger.warn(message);
        });
    },

    // Custom method for logging error messages to have the right order of log messages in console
    logError: function (browser, message) {
        browser.perform(function () {
            logger.error(message);
        });
    },

    // Custom method for logging fatal messages to have the right order of log messages in console
    logFatal: function (browser, message) {
        browser.perform(function () {
            logger.fatal(message);
        });
    }
}
