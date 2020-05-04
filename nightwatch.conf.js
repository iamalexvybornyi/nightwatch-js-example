const fs = require('fs');
let rawdata = fs.readFileSync('testData/DefaultAccountData.json');
let defaultAccountData = JSON.parse(rawdata);
const Logger = require('logger-nodejs');
const logger = new Logger();

module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page-objects'],
    'globals_path': 'globals/globals.js',
    'globals': {
        defaultAccountData: defaultAccountData,
        logger: logger
    },

    'webdriver': {
        'start_process': true,
        'server_path': require('chromedriver').path,
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            "skip_testcases_on_fail": false,
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    args: [
                        '--ignore-certificate-errors',
                        '--start-maximized'
                    ]
                }
            }
        }
    }
};
