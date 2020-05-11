let basePage;
let headerSection;
let authenticationPage;
let loginForm;
let createAccountForm;
let myAccountPage;
let createAccountPage;
let personalInformationSection;
let yourAddressSection;
const GenderEnum = require('../utils/GenderEnum');
const CommonUtility = require('../utils/CommonUtility');

module.exports = {
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
        personalInformationSection.selectGender(GenderEnum[browser.globals.defaultAccountData.gender]);
        personalInformationSection.enterFirstName(browser.globals.defaultAccountData.firstName);
        personalInformationSection.enterLastName(browser.globals.defaultAccountData.lastName);
        personalInformationSection.enterEmailAddress(browser.globals.defaultAccountData.email);
        personalInformationSection.enterPassword(browser.globals.defaultAccountData.password);
        personalInformationSection.enterDateOfBirth(browser.globals.defaultAccountData.dayOfBirth,
            browser.globals.defaultAccountData.monthOfBirth,
            browser.globals.defaultAccountData.yearOfBirth);
        personalInformationSection.signUpForNewsletter(browser.globals.defaultAccountData.signUpForNewsletter);
        personalInformationSection.recieveSpecialOffers(browser.globals.defaultAccountData.recieveOffers);
        yourAddressSection.enterFirstName(browser.globals.defaultAccountData.firstName);
        yourAddressSection.enterLastName(browser.globals.defaultAccountData.lastName);
        yourAddressSection.enterCompany(browser.globals.defaultAccountData.company);
        yourAddressSection.enterAddress1(browser.globals.defaultAccountData.address);
        yourAddressSection.enterAddress2(browser.globals.defaultAccountData.address2);
        yourAddressSection.enterCity(browser.globals.defaultAccountData.city);
        yourAddressSection.selectState(browser.globals.defaultAccountData.state);
        yourAddressSection.enterZipCode(browser.globals.defaultAccountData.zipCode)
        yourAddressSection.selectCountry(browser.globals.defaultAccountData.country);
        yourAddressSection.enterOtherInfo(browser.globals.defaultAccountData.additionalInformation);
        yourAddressSection.enterHomePhone(browser.globals.defaultAccountData.homePhone);
        yourAddressSection.enterMobilePhone(browser.globals.defaultAccountData.mobilePhone);
        yourAddressSection.enterAddressAlias(browser.globals.defaultAccountData.addressAlias);
        createAccountPage.clickRegisterButton();
        myAccountPage.verifyTextOnMyAccountPageMatchesExpected();
    }
}
