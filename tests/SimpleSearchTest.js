let basePage;
let headerSection;
let searchResultsPage;
let mainContentContainerSection;
let searchResultsPageHeaderSection;

module.exports = {
    '@tags': ['search', 'smoke'],

    before: function (browser) {
        basePage = browser.page.BasePage();
        headerSection = basePage.section.headerSection;
        searchResultsPage = browser.page.SearchResultsPage();
        mainContentContainerSection = searchResultsPage.section.mainContentContainerSection;
        searchResultsPageHeaderSection = searchResultsPage.section.headerSection;
    },

    beforeEach: function (browser) {
        basePage.navigate();
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Search and verify the results'(browser) {
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
