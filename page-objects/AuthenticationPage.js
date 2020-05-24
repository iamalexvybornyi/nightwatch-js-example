const basePage = require('./BasePage');

const props = {
};
Object.assign(props, basePage.props);

const elements = {};
Object.assign(elements, basePage.elements);

const commands = {};
Object.assign(commands, basePage.commands);

const sections = {
    createAccountForm: {
        selector: 'form[id="create-account_form"]',
        locateStrategy: 'css selector',

        elements: {
            emailAddressInputField: 'input[id="email_create"]',
            createAccountButton: 'button[id="SubmitCreate"]'
        },

        commands: [
            {
                enterEmailAddress: function (email) {
                    this.api.globals.logInfo(this, 'Entering "' + email + '" email address');
                    this.api.globals.logDebug(this, 'Waiting for the email address input field to appear');
                    this.waitForElementVisible(this.elements.emailAddressInputField);
                    this.api.globals.logDebug(this, 'Setting "' + email + '" text into email address input field');
                    this.clearValue(this.elements.emailAddressInputField);
                    this.setValue(this.elements.emailAddressInputField, email);
                },

                clickCreateAccountButton() {
                    this.api.globals.logInfo(this, 'Clicking the "Create an account" button');
                    this.api.globals.logDebug(this, 'Waiting for the "Create an account" button to appear');
                    this.waitForElementVisible(this.elements.createAccountButton);
                    this.api.globals.logDebug(this, 'Clicking the "Create an account" button');
                    this.click(this.elements.createAccountButton);
                }
            }
        ],
    },
    
    loginForm: {
        selector: 'form[id="login_form"]',
        locateStrategy: 'css selector',

        elements: {
            emailAddressInputField: 'input[id="email"]',
            passwordInputField: 'input[id="passwd"]',
            signInButton: 'button[id="SubmitLogin"]'
        },

        commands: [
            {
                enterEmailAddress: function (email) {
                    this.api.globals.logInfo(this, 'Entering "' + email + '" email address');
                    this.api.globals.logDebug(this, 'Waiting for the email address input field to appear');
                    this.waitForElementVisible(this.elements.emailAddressInputField);
                    this.api.globals.logDebug(this, 'Setting "' + email + '" text into email address input field');
                    this.clearValue(this.elements.emailAddressInputField);
                    this.setValue(this.elements.emailAddressInputField, email);
                },

                enterPassword: function (password) {
                    this.api.globals.logInfo(this, 'Entering "' + password + '" password');
                    this.api.globals.logDebug(this, 'Waiting for the password input field to appear');
                    this.waitForElementVisible(this.elements.passwordInputField);
                    this.api.globals.logDebug(this, 'Setting "' + password + '" text into password input field');
                    this.clearValue(this.elements.passwordInputField);
                    this.setValue(this.elements.passwordInputField, password);
                },

                clickSignInButton() {
                    this.api.globals.logInfo(this, 'Clicking the "Sign in" button');
                    this.api.globals.logDebug(this, 'Waiting for the "Sign in" button to appear');
                    this.waitForElementVisible(this.elements.signInButton);
                    this.api.globals.logDebug(this, 'Clicking the "Sign in" button');
                    this.click(this.elements.signInButton);
                }
            }
        ],
    }
};
Object.assign(sections, basePage.sections);

module.exports = {
    props: props,
    commands: commands,
    elements: elements,
    sections: sections
};
