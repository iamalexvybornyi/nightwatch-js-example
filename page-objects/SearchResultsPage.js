module.exports = {

    elements: {
    },

    commands: {
    },

    sections: {
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
                        this.verify.containsText(this.elements.searchResultsHeader, this.props.searchResultsText);
                    }
                }
            ],

            props: function () {
                return {
                    searchResultsText: 'SEARCH'
                };
            }
        }
    }
}