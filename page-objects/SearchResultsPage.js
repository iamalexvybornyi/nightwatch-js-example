const basePage = require('./BasePage');

const props = {
    searchResultsText: 'SEARCH'
};
Object.assign(props, basePage.props);

const elements = {};
Object.assign(elements, basePage.elements);

const commands = {};
Object.assign(commands, basePage.commands);

const sections = {
    mainContentContainerSection: {
        selector: 'div[class="columns-container"]',
        locateStrategy: 'css selector',

        elements: {
            searchResultsHeader: 'h1[class="page-heading  product-listing"]',
            listOfProducts: 'ul[class="product_list grid row"]'
        },

        commands: [
            {
                verifyResultsHeaderIsDisplayed: function () {
                    this.api.globals.logInfo(this, 'Waiting for the serch results header to appear on the page');
                    this.api.globals.logDebug(this, 'Waiting for the serch results header to appear');
                    this.waitForElementVisible(this.elements.searchResultsHeader);
                    this.api.globals.logInfo(this, 'Verifying that serch results header contains "' + props.searchResultsText + '" text');
                    this.verify.containsText(this.elements.searchResultsHeader, props.searchResultsText);
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
