let basePage;
let headerSection;
let authenticationPage;
let loginForm;
let createAccountForm;
let myAccountPage;

module.exports = {
    before: function (browser) {
        basePage = browser.page.BasePage();
        headerSection = basePage.section.headerSection;
        authenticationPage = browser.page.AuthenticationPage();
        loginForm = authenticationPage.section.loginForm;
        createAccountForm = authenticationPage.section.createAccountForm;
        myAccountPage = browser.page.MyAccountPage();
    },

    beforeEach: function (browser) {
        basePage.navigate();
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Verify successful login'(browser) {
        basePage.waitForPageToLoad();
        headerSection.clickSignInButton();
        loginForm.enterEmailAddress(browser.globals.defaultAccountData.email);
        loginForm.enterPassword(browser.globals.defaultAccountData.password);
        loginForm.clickSignInButton();
        myAccountPage.verifyTextOnMyAccountPageMatchesExpected();
    }
}
