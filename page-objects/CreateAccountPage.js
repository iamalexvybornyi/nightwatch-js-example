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
        this.api.globals.logger.info('Clicking the "Register" button');
        this.api.globals.logger.debug('Waiting for the "Register" button to appear');
        this.waitForElementVisible(this.elements.registerButton);
        this.api.globals.logger.debug('Clicking the "Register" button');
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
                    this.api.globals.logger.info('Selecting "' + genderEnumValue + '" gender');
                    if (genderEnumValue === genderEnum.MR) {
                        this.waitForElementVisible(this.elements.mrRadioButton);
                        this.click(this.elements.mrRadioButton);
                    } else if (genderEnumValue === genderEnum.MRS) {
                        this.waitForElementVisible(this.elements.mrsRadioButton);
                        this.click(this.elements.mrsRadioButton);
                    } else {
                        this.api.globals.logger.error('Incorrect gender enum value has been passed!');
                    }
                },

                enterFirstName: function (firstNameValue) {
                    this.api.globals.logger.info('Entering "' + firstNameValue + '" into the First name field');
                    this.waitForElementVisible(this.elements.firstNameField);
                    this.clearValue(this.elements.firstNameField);
                    this.setValue(this.elements.firstNameField, firstNameValue);
                },

                enterLastName: function (lastNameValue) {
                    this.api.globals.logger.info('Entering "' + lastNameValue + '" into the Last name field');
                    this.waitForElementVisible(this.elements.lastNameField);
                    this.clearValue(this.elements.lastNameField);
                    this.setValue(this.elements.lastNameField, lastNameValue);
                },

                enterEmailAddress: function (email) {
                    this.api.globals.logger.info('Entering "' + email + '" email address');
                    this.waitForElementVisible(this.elements.emailField);
                    this.clearValue(this.elements.emailField);
                    this.setValue(this.elements.emailField, email);
                },

                enterPassword: function (password) {
                    this.api.globals.logger.info('Entering "' + password + '" password');
                    this.api.globals.logger.debug('Waiting for the password input field to appear');
                    this.waitForElementVisible(this.elements.passwordField);
                    this.clearValue(this.elements.passwordField);
                    this.api.globals.logger.debug('Setting "' + password + '" text into password input field');
                    this.setValue(this.elements.passwordField, password);
                },

                enterDateOfBirth: function (day, month, year) {
                    this.api.globals.logger.info('Entering "' + day + '/' + month + '/' + year + '" date of birth');
                    this.waitForElementPresent(this.elements.daysDropdown);
                    this.setValue(this.elements.daysDropdown, day);
                    this.waitForElementPresent(this.elements.monthsDropdown);
                    this.setValue(this.elements.monthsDropdown, month);
                    this.waitForElementPresent(this.elements.yearsDropdown);
                    this.setValue(this.elements.yearsDropdown, year);
                },

                signUpForNewsletter: function(signUpFlag) {
                    this.api.element(this.elements.newsletterCheckbox, function(result) {
                        this.elementIdSelected(result.value.ELEMENT, function(result) {
                            if (signUpFlag === true && result.value === false) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.newsletterCheckbox);
                            } else if (signUpFlag === false && result.value === true) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.newsletterCheckbox);
                            }
                        }); 
                      });
                },

                recieveSpecialOffers: function(recieveSpecialOffersFlag) {
                    this.api.element(this.elements.specialOffersCheckbox, function(result) {
                        this.elementIdSelected(result.value.ELEMENT, function(result) {
                            if (recieveSpecialOffersFlag === true && result.value === false) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.specialOffersCheckbox);
                            } else if (recieveSpecialOffersFlag === false && result.value === true) {
                                this.click(this.page.CreateAccountPage().section.personalInformationSection.elements.specialOffersCheckbox);
                            }
                        }); 
                      });
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
                    this.api.globals.logger.info('Entering "' + firstNameValue + '" into the First name field');
                    this.clearValue(this.elements.firstNameField);
                    this.waitForElementVisible(this.elements.firstNameField);
                    this.setValue(this.elements.firstNameField, firstNameValue);
                },

                enterLastName: function (lastNameValue) {
                    this.api.globals.logger.info('Entering "' + lastNameValue + '" into the Last name field');
                    this.waitForElementVisible(this.elements.lastNameField);
                    this.clearValue(this.elements.lastNameField);
                    this.setValue(this.elements.lastNameField, lastNameValue);
                },

                enterCompany: function (companyValue) {
                    this.api.globals.logger.info('Entering "' + companyValue + '" into the Company field');
                    this.waitForElementVisible(this.elements.companyField);
                    this.clearValue(this.elements.companyField);
                    this.setValue(this.elements.companyField, companyValue);
                },

                enterAddress1: function (address1Value) {
                    this.api.globals.logger.info('Entering "' + address1Value + '" into the Address 1 field');
                    this.waitForElementVisible(this.elements.address1Field);
                    this.clearValue(this.elements.address1Field);
                    this.setValue(this.elements.address1Field, address1Value);
                },

                enterAddress2: function (address2Value) {
                    this.api.globals.logger.info('Entering "' + address2Value + '" into the Address 2 field');
                    this.waitForElementVisible(this.elements.address2Field);
                    this.clearValue(this.elements.address2Field);
                    this.setValue(this.elements.address2Field, address2Value);
                },

                enterCity: function (cityValue) {
                    this.api.globals.logger.info('Entering "' + cityValue + '" into the City field');
                    this.waitForElementVisible(this.elements.cityField);
                    this.clearValue(this.elements.cityField);
                    this.setValue(this.elements.cityField, cityValue);
                },

                selectState: function (stateValue) {
                    this.api.globals.logger.info('Selecting "' + stateValue + '" in the State dropdown');
                    this.waitForElementPresent(this.elements.stateDropdown);
                    this.setValue(this.elements.stateDropdown, stateValue);
                },

                enterZipCode: function (zipCodeValue) {
                    this.api.globals.logger.info('Entering "' + zipCodeValue + '" into the Zip Code field');
                    this.waitForElementVisible(this.elements.zipCodeField);
                    this.clearValue(this.elements.zipCodeField);
                    this.setValue(this.elements.zipCodeField, zipCodeValue);
                },

                selectCountry: function (countryValue) {
                    this.api.globals.logger.info('Selecting "' + countryValue + '" in the Country dropdown');
                    this.waitForElementPresent(this.elements.countryDropdown);
                    this.setValue(this.elements.countryDropdown, countryValue);
                },

                enterOtherInfo: function (otherInfoValue) {
                    this.api.globals.logger.info('Entering "' + otherInfoValue + '" into the Other Info field');
                    this.waitForElementVisible(this.elements.otherInfoField);
                    this.clearValue(this.elements.otherInfoField);
                    this.setValue(this.elements.otherInfoField, otherInfoValue);
                },

                enterHomePhone: function (homePhoneValue) {
                    this.api.globals.logger.info('Entering "' + homePhoneValue + '" into the Home Phone field');
                    this.waitForElementVisible(this.elements.homePhoneField);
                    this.clearValue(this.elements.homePhoneField);
                    this.setValue(this.elements.homePhoneField, homePhoneValue);
                },

                enterMobilePhone: function (mobilePhoneValue) {
                    this.api.globals.logger.info('Entering "' + mobilePhoneValue + '" into the Mobile Phone field');
                    this.waitForElementVisible(this.elements.mobilePhoneField);
                    this.clearValue(this.elements.mobilePhoneField);
                    this.setValue(this.elements.mobilePhoneField, mobilePhoneValue);
                },

                enterAddressAlias: function (addressAliasValue) {
                    this.api.globals.logger.info('Entering "' + addressAliasValue + '" into the Address Alias field');
                    this.waitForElementVisible(this.elements.addressAliasField);
                    this.clearValue(this.elements.addressAliasField);
                    this.setValue(this.elements.addressAliasField, addressAliasValue);
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
