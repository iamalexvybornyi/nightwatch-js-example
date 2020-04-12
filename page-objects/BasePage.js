module.exports = {

    url: 'http://automationpractice.com',

    commands: [
        {
            waitForPageToLoad: function() {
                this.waitForElementVisible(this.section.headerSection.selector);
            }
        }
    ],

    sections: {
        headerSection: {
            selector: 'div[class="header-container"]',
            locateStrategy: 'css selector',

            elements: {
                contactUsLink : 'div[id="contact-link"] a',
                signInLink : 'a[class="login"]',
                searchInputField : 'input[name="search_query"]',
                submitSearchButton : 'button[name="submit_search"]',
                womenButton : 'a[title="Women"]',
                dressesButton : 'a[title="Dresses"]',
                tShirtsButton : 'a[title="T-shirts"]'
            },

            commands: [
                {
                    submitSearch: function (searchParameter) {
                        this.waitForElementVisible(this.elements.searchInputField);
                        this.setValue(this.elements.searchInputField, searchParameter);
                        this.waitForElementVisible(this.elements.submitSearchButton);
                        this.click(this.elements.submitSearchButton);
                    },
                    verifyContactUsText() {
                        this.waitForElementVisible(this.elements.contactUsLink);
                        this.verify.containsText(this.elements.contactUsLink, this.props.contactUsText);
                    },
                    verifySignInText() {
                        this.waitForElementVisible(this.elements.signInLink);
                        this.verify.containsText(this.elements.signInLink, this.props.signInText);
                    }
                }
            ],

            props: function () {
                return {
                    contactUsText: 'Contact us',
                    signInText: 'Sign in'
                };
            }
        }
    }
};