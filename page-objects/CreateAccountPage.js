const basePage = require('./BasePage');
const genderEnum = require('../utils/GenderEnum');

const props = {
};
Object.assign(props, basePage.props);

const elements = {
    registerButton: 'button[id="submitAccount"]'
};
Object.assign(elements, basePage.elements);

const commands = {
    clickRegisterButton() {
        this.api.globals.logInfo(this, 'Clicking the "Register" button');
        this.api.globals.logDebug(this, 'Waiting for the "Register" button to appear');
        this.waitForElementVisible(this.elements.registerButton);
        this.api.globals.logDebug(this, 'Clicking the "Register" button');
        this.click(this.elements.registerButton);
    }
};
Object.assign(commands, basePage.commands);

const sections = {
    personalInformationSection: {
        selector: '//div[@class="account_creation"]/*[@class="page-subheading" and contains(text(), "Your personal information")]',
        locateStrategy: 'xpath',

        elements: {
            mrRadioButton: 'input[id="id_gender1"]',
            mrsRadioButton: 'input[id="id_gender2"]',
            firstNameField: 'input[id="customer_firstname"]',
            lastNameField: 'input[id="customer_lastname"]',
            emailField: 'input[id="email"]',
            passwordField: 'input[id="passwd"]',
            daysDropdown: 'select[id="days"]',
            monthsDropdown: 'select[id="months"]',
            yearsDropdown: 'select[id="years"]',
            newsletterCheckbox: 'input[id="newsletter"]',
            specialOffersCheckbox: 'input[id="optin"]'
        },

        commands: [
            {
                selectGender: function (genderEnumValue) {
                    this.api.globals.logInfo(this, 'Selecting "' + genderEnumValue + '" gender');
                    if (genderEnumValue === genderEnum.MR) {
                        this.waitForElementVisible(this.elements.mrRadioButton);
                        this.click(this.elements.mrRadioButton);
                    } else if (genderEnumValue === genderEnum.MRS) {
                        this.waitForElementVisible(this.elements.mrsRadioButton);
                        this.click(this.elements.mrsRadioButton);
                    } else {
                        this.api.globals.logError(this, 'Incorrect gender enum value has been passed!');
                    }
                },

                enterFirstName: function (firstNameValue) {
                    this.api.globals.logInfo(this, 'Entering "' + firstNameValue + '" into the First name field');
                    this.waitForElementVisible(this.elements.firstNameField);
                    this.clearValue(this.elements.firstNameField);
                    this.setValue(this.elements.firstNameField, firstNameValue);
                },

                enterLastName: function (lastNameValue) {
                    this.api.globals.logInfo(this, 'Entering "' + lastNameValue + '" into the Last name field');
                    this.waitForElementVisible(this.elements.lastNameField);
                    this.clearValue(this.elements.lastNameField);
                    this.setValue(this.elements.lastNameField, lastNameValue);
                },

                enterEmailAddress: function (email) {
                    this.api.globals.logInfo(this, 'Entering "' + email + '" email address');
                    this.waitForElementVisible(this.elements.emailField);
                    this.clearValue(this.elements.emailField);
                    this.setValue(this.elements.emailField, email);
                },

                enterPassword: function (password) {
                    this.api.globals.logInfo(this, 'Entering "' + password + '" password');
                    this.waitForElementVisible(this.elements.passwordField);
                    this.clearValue(this.elements.passwordField);
                    this.api.globals.logDebug(this, 'Setting "' + password + '" text into password input field');
                    this.setValue(this.elements.passwordField, password);
                },

                enterDateOfBirth: function (day, month, year) {
                    this.api.globals.logInfo(this, 'Entering "' + day + '/' + month + '/' + year + '" date of birth');
                    this.waitForElementPresent(this.elements.daysDropdown);
                    this.setValue(this.elements.daysDropdown, day);
                    this.waitForElementPresent(this.elements.monthsDropdown);
                    this.setValue(this.elements.monthsDropdown, month);
                    this.waitForElementPresent(this.elements.yearsDropdown);
                    this.setValue(this.elements.yearsDropdown, year);
                },

                signUpForNewsletter: function(signUpFlag) {
                    this.api.globals.logInfo(this, 'Setting up sign up for newsletter flag to ' + signUpFlag);
                    this.api.element(this.elements.newsletterCheckbox, function(result) {
                        // result.value.ELEMENT can be used below in the elementIdSelected(...), but it will only work for chrome, not for firefox
                        this.elementIdSelected(result.value[Object.keys(result.value)[0]].toString(), function(result) {
                            if (signUpFlag === true && result.value === false) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.newsletterCheckbox);
                            } else if (signUpFlag === false && result.value === true) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.newsletterCheckbox);
                            }
                        }); 
                      });
                },

                recieveSpecialOffers: function(recieveSpecialOffersFlag) {
                    this.api.globals.logInfo(this, 'Setting up recieve special offers flag to ' + recieveSpecialOffersFlag);
                    this.waitForElementPresent(this.elements.specialOffersCheckbox);
                    this.api.element(this.elements.specialOffersCheckbox, function(result) {
                        // result.value.ELEMENT can be used below in the elementIdSelected(...), but it will only work for chrome, not for firefox
                        this.elementIdSelected(result.value[Object.keys(result.value)[0]].toString(), function(result) {
                            if (recieveSpecialOffersFlag === true && result.value === false) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.specialOffersCheckbox);
                            } else if (recieveSpecialOffersFlag === false && result.value === true) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.specialOffersCheckbox);
                            }
                        }); 
                      });
                },

                fillPersonalInformationSection: function(accountData) {
                    this.api.globals.logInfo(this, 'Filling in the "Personal Information" section');
                    this.selectGender(genderEnum[accountData.gender]);
                    this.enterFirstName(accountData.firstName);
                    this.enterLastName(accountData.lastName);
                    this.enterEmailAddress(accountData.email);
                    this.enterPassword(accountData.password);
                    this.enterDateOfBirth(accountData.dayOfBirth,
                        accountData.monthOfBirth,
                        accountData.yearOfBirth);
                    this.signUpForNewsletter(accountData.signUpForNewsletter);
                    this.recieveSpecialOffers(accountData.recieveOffers);
                }
            }
        ],
    },
    
    yourAddressSection: {
        selector: '//div[@class="account_creation"]/*[@class="page-subheading" and contains(text(), "Your address")]',
        locateStrategy: 'xpath',

        elements: {
            firstNameField: 'input[id="firstname"]',
            lastNameField: 'input[id="lastname"]',
            companyField: 'input[id="company"]',
            address1Field: 'input[id="address1"]',
            address2Field: 'input[id="address2"]',
            cityField: 'input[id="city"]',
            stateDropdown: 'select[id="id_state"]',
            zipCodeField: 'input[id="postcode"]',
            countryDropdown: 'select[id="id_country"]',
            otherInfoField: 'textarea[id="other"]',
            homePhoneField: 'input[id="phone"]',
            mobilePhoneField: 'input[id="phone_mobile"]',
            addressAliasField: 'input[id="alias"]'
        },

        commands: [
            {
                enterFirstName: function (firstNameValue) {
                    this.api.globals.logInfo(this, 'Entering "' + firstNameValue + '" into the First name field');
                    this.clearValue(this.elements.firstNameField);
                    this.waitForElementVisible(this.elements.firstNameField);
                    this.setValue(this.elements.firstNameField, firstNameValue);
                },

                enterLastName: function (lastNameValue) {
                    this.api.globals.logInfo(this, 'Entering "' + lastNameValue + '" into the Last name field');
                    this.waitForElementVisible(this.elements.lastNameField);
                    this.clearValue(this.elements.lastNameField);
                    this.setValue(this.elements.lastNameField, lastNameValue);
                },

                enterCompany: function (companyValue) {
                    this.api.globals.logInfo(this, 'Entering "' + companyValue + '" into the Company field');
                    this.waitForElementVisible(this.elements.companyField);
                    this.clearValue(this.elements.companyField);
                    this.setValue(this.elements.companyField, companyValue);
                },

                enterAddress1: function (address1Value) {
                    this.api.globals.logInfo(this, 'Entering "' + address1Value + '" into the Address 1 field');
                    this.waitForElementVisible(this.elements.address1Field);
                    this.clearValue(this.elements.address1Field);
                    this.setValue(this.elements.address1Field, address1Value);
                },

                enterAddress2: function (address2Value) {
                    this.api.globals.logInfo(this, 'Entering "' + address2Value + '" into the Address 2 field');
                    this.waitForElementVisible(this.elements.address2Field);
                    this.clearValue(this.elements.address2Field);
                    this.setValue(this.elements.address2Field, address2Value);
                },

                enterCity: function (cityValue) {
                    this.api.globals.logInfo(this, 'Entering "' + cityValue + '" into the City field');
                    this.waitForElementVisible(this.elements.cityField);
                    this.clearValue(this.elements.cityField);
                    this.setValue(this.elements.cityField, cityValue);
                },

                selectState: function (stateValue) {
                    this.api.globals.logInfo(this, 'Selecting "' + stateValue + '" in the State dropdown');
                    this.waitForElementPresent(this.elements.stateDropdown);
                    this.setValue(this.elements.stateDropdown, stateValue);
                },

                enterZipCode: function (zipCodeValue) {
                    this.api.globals.logInfo(this, 'Entering "' + zipCodeValue + '" into the Zip Code field');
                    this.waitForElementVisible(this.elements.zipCodeField);
                    this.clearValue(this.elements.zipCodeField);
                    this.setValue(this.elements.zipCodeField, zipCodeValue);
                },

                selectCountry: function (countryValue) {
                    this.api.globals.logInfo(this, 'Selecting "' + countryValue + '" in the Country dropdown');
                    this.waitForElementPresent(this.elements.countryDropdown);
                    this.setValue(this.elements.countryDropdown, countryValue);
                },

                enterOtherInfo: function (otherInfoValue) {
                    this.api.globals.logInfo(this, 'Entering "' + otherInfoValue + '" into the Other Info field');
                    this.waitForElementVisible(this.elements.otherInfoField);
                    this.clearValue(this.elements.otherInfoField);
                    this.setValue(this.elements.otherInfoField, otherInfoValue);
                },

                enterHomePhone: function (homePhoneValue) {
                    this.api.globals.logInfo(this, 'Entering "' + homePhoneValue + '" into the Home Phone field');
                    this.waitForElementVisible(this.elements.homePhoneField);
                    this.clearValue(this.elements.homePhoneField);
                    this.setValue(this.elements.homePhoneField, homePhoneValue);
                },

                enterMobilePhone: function (mobilePhoneValue) {
                    this.api.globals.logInfo(this, 'Entering "' + mobilePhoneValue + '" into the Mobile Phone field');
                    this.waitForElementVisible(this.elements.mobilePhoneField);
                    this.clearValue(this.elements.mobilePhoneField);
                    this.setValue(this.elements.mobilePhoneField, mobilePhoneValue);
                },

                enterAddressAlias: function (addressAliasValue) {
                    this.api.globals.logInfo(this, 'Entering "' + addressAliasValue + '" into the Address Alias field');
                    this.waitForElementVisible(this.elements.addressAliasField);
                    this.clearValue(this.elements.addressAliasField);
                    this.setValue(this.elements.addressAliasField, addressAliasValue);
                },

                fillYourAddressInformationSection: function(accountData) {
                    this.api.globals.logInfo(this, 'Filling in the "Your Address" section');
                    this.enterFirstName(accountData.firstName);
                    this.enterLastName(accountData.lastName);
                    this.enterCompany(accountData.company);
                    this.enterAddress1(accountData.address);
                    this.enterAddress2(accountData.address2);
                    this.enterCity(accountData.city);
                    this.selectState(accountData.state);
                    this.enterZipCode(accountData.zipCode)
                    this.selectCountry(accountData.country);
                    this.enterOtherInfo(accountData.additionalInformation);
                    this.enterHomePhone(accountData.homePhone);
                    this.enterMobilePhone(accountData.mobilePhone);
                    this.enterAddressAlias(accountData.addressAlias);
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
