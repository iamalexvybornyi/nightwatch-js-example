module.exports = {
    'Verify header links text'(browser) {
        let basePage = browser.page.BasePage();
        let headerSection = basePage.section.headerSection;

        basePage.navigate();
        basePage.waitForPageToLoad();
        headerSection.verifyContactUsText();
        headerSection.verifySignInText();
        headerSection.submitSearch('Dress');
    }
}
