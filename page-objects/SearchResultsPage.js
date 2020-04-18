const basePage = require('./BasePage');

const props = {
    searchResultsText: 'SEARCH'
};

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
                    this.waitForElementVisible(this.elements.searchResultsHeader);
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
