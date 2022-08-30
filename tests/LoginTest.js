let basePage;
let headerSection;
let authenticationPage;
let loginForm;
let createAccountForm;
let myAccountPage;
let createAccountPage;
let personalInformationSection;
let yourAddressSection;
const CommonUtility = require('../utils/CommonUtility');

module.exports = {
    '@tags': ['login', 'smoke'],

    before: function (browser) {
        basePage = browser.page.BasePage();
        headerSection = basePage.section.headerSection;
        authenticationPage = browser.page.AuthenticationPage();
        loginForm = authenticationPage.section.loginForm;
        createAccountForm = authenticationPage.section.createAccountForm;
        myAccountPage = browser.page.MyAccountPage();
        createAccountPage = browser.page.CreateAccountPage();
        personalInformationSection = createAccountPage.section.personalInformationSection;
        yourAddressSection = createAccountPage.section.yourAddressSection;
    },

    beforeEach: function (browser) {
        basePage.navigate();
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Login with existing account'(browser) {
        basePage.waitForPageToLoad();
        headerSection.clickSignInButton();

        loginForm.enterEmailAddress(browser.globals.defaultAccountData.email);
        loginForm.enterPassword(browser.globals.defaultAccountData.password);
        loginForm.clickSignInButton();

        myAccountPage.verifyTextOnMyAccountPageMatchesExpected();
    },

    'Create new account'(browser) {
        browser.globals.defaultAccountData.email = CommonUtility.getRandomEmail("@random.com", 10);

        basePage.waitForPageToLoad();
        headerSection.clickSignInButton();

        createAccountForm.enterEmailAddress(browser.globals.defaultAccountData.email);
        createAccountForm.clickCreateAccountButton();

        personalInformationSection.fillPersonalInformationSection(browser.globals.defaultAccountData);
        yourAddressSection.fillYourAddressInformationSection(browser.globals.defaultAccountData);
        createAccountPage.clickRegisterButton();
        
        myAccountPage.verifyTextOnMyAccountPageMatchesExpected();
    }
}
