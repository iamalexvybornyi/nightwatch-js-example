module.exports = {
    'Verify header links text'(browser) {
        let basePage = browser.page.BasePage();
        let headerSection = basePage.section.headerSection;

        basePage.navigate();
        basePage.waitForPageToLoad();
        headerSection.verifyContactUsText();
        headerSection.verifySignInText();
    },

    'Search and verify the results'(browser) {
        let basePage = browser.page.BasePage();
        let headerSection = basePage.section.headerSection;
        let searchResultsPage = browser.page.SearchResultsPage();
        let mainContentContainerSection = searchResultsPage.section.mainContentContainerSection;

        basePage.navigate();
        basePage.waitForPageToLoad();
        headerSection.verifyContactUsText();
        headerSection.verifySignInText();
        headerSection.submitSearch('Dress');
        mainContentContainerSection.verifyResultsHeaderIsDisplayed();
    }
}
