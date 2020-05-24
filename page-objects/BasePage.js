const url = 'http://automationpractice.com';

const props = {
    contactUsText: 'Contact us',
    signInText: 'Sign in'
};

const elements = {};

const commands = {
    waitForPageToLoad: function () {
        this.api.globals.logInfo(this, 'Waiting for the base header of the page to appear');
        this.waitForElementVisible(this.section.headerSection.selector);
    }
};

const sections = {
    headerSection: {
        selector: 'div[class="header-container"]',
        locateStrategy: 'css selector',

        elements: {
            contactUsLink: 'div[id="contact-link"] a',
            signInLink: 'a[class="login"]',
            searchInputField: 'input[name="search_query"]',
            submitSearchButton: 'button[name="submit_search"]',
            womenButton: 'a[title="Women"]',
            dressesButton: 'a[title="Dresses"]',
            tShirtsButton: 'a[title="T-shirts"]'
        },

        commands: [
            {
                submitSearch: function (searchParameter) {
                    this.api.globals.logInfo(this, 'Submitting search with "' + searchParameter + '" parameter');
                    this.api.globals.logDebug(this, 'Waiting for the search input field to appear on the page');
                    this.waitForElementVisible(this.elements.searchInputField);
                    this.api.globals.logDebug(this, 'Setting "' + searchParameter + '" value into the search input field');
                    this.api.globals.logDebug(this, 'Clearing the Search field');
                    this.clearValue(this.elements.searchInputField);
                    this.setValue(this.elements.searchInputField, searchParameter);
                    this.api.globals.logDebug(this, 'Waiting for the search submit button to appear on the page');
                    this.waitForElementVisible(this.elements.submitSearchButton);
                    this.api.globals.logDebug(this, 'Clicking the search submit button');
                    this.click(this.elements.submitSearchButton);
                },

                verifyContactUsText() {
                    this.api.globals.logInfo(this, 'Veryfying "Contact us" text');
                    this.api.globals.logDebug(this, 'Waiting for "Contact us" button to appear');
                    this.waitForElementVisible(this.elements.contactUsLink);
                    this.api.globals.logDebug(this, 'Veryfying "Contact us" text');
                    this.verify.containsText(this.elements.contactUsLink, props.contactUsText);
                },

                clickContactUsButton() {
                    this.api.globals.logInfo(this, 'Clicking "Contact us" button');
                    this.api.globals.logDebug(this, 'Waiting for "Contact us" button to appear');
                    this.waitForElementVisible(this.elements.contactUsLink);
                    this.api.globals.logDebug(this, 'Clicking "Contact us" button');
                    this.click(this.elements.contactUsLink);
                },

                verifySignInText() {
                    this.api.globals.logInfo(this, 'Veryfying "Sign in" text');
                    this.api.globals.logDebug(this, 'Waiting for "Sign in" button to appear');
                    this.waitForElementVisible(this.elements.signInLink);
                    this.api.globals.logDebug(this, 'Veryfying "Sign in" text');
                    this.verify.containsText(this.elements.signInLink, props.signInText);
                },

                clickSignInButton() {
                    this.api.globals.logInfo(this, 'Clicking "Sign in" button');
                    this.api.globals.logDebug(this, 'Waiting for "Sign in" button to appear');
                    this.waitForElementVisible(this.elements.signInLink);
                    this.api.globals.logDebug(this, 'Clicking "Sign in" button');
                    this.click(this.elements.signInLink);
                }
            }
        ],
    }
};

module.exports = {
    url: url,
    props: props,
    commands: commands,
    elements: elements,
    sections: sections
};
