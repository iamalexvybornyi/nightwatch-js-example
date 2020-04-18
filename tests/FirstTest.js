module.exports = {
    beforeEach: function (browser) {
        let basePage = browser.page.BasePage();
        basePage.navigate();
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Verify header links text'(browser) {
        let basePage = browser.page.BasePage();
        let headerSection = basePage.section.headerSection;

        console.log('Global var example: ' + browser.globals.globalVarExample);
        basePage.waitForPageToLoad();
        headerSection.verifyContactUsText();
        headerSection.verifySignInText();
    },

    'Search and verify the results'(browser) {
        let basePage = browser.page.BasePage();
        let headerSection = basePage.section.headerSection;
        let searchResultsPage = browser.page.SearchResultsPage();
        let mainContentContainerSection = searchResultsPage.section.mainContentContainerSection;
        let searchResultsPageHeaderSection = searchResultsPage.section.headerSection;

        basePage.waitForPageToLoad();
        headerSection.verifyContactUsText();
        headerSection.verifySignInText();
        headerSection.submitSearch('Dress');
        searchResultsPage.waitForPageToLoad();
        searchResultsPageHeaderSection.verifyContactUsText();
        searchResultsPageHeaderSection.verifySignInText();
        mainContentContainerSection.verifyResultsHeaderIsDisplayed();
    }
}
