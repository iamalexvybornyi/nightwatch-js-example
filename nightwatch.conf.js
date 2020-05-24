module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page-objects'],
    'globals_path': 'globals/globals.js',

    'test_settings': {
        'default': {
            'webdriver': {
                'start_process': true,
                'server_path': require('chromedriver').path,
                'port': 9515
            },
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
        },
        'non-default': {
            'webdriver': {
                'start_process': true,
                'server_path': require('geckodriver').path,
                'port': 4444
            },
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            "skip_testcases_on_fail": false,
            'desiredCapabilities': {
                'browserName': 'firefox',
                'moz:firefoxOptions': {
                    args: [
                        '--ignore-certificate-errors',
                        '--start-maximized'
                    ]
                }
            }
        }
    }
};
