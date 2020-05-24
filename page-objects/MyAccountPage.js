const basePage = require('./BasePage');

const props = {
    myAccountHeaderText: 'MY ACCOUNT',
    welcomingText: 'Welcome to your account. Here you can manage all of your personal information and orders.',
};
Object.assign(props, basePage.props);

const elements = {
    myAccountHeader: 'h1[class="page-heading"]',
    welcomingTextElement: 'p[class="info-account"]',
    orderHistoryAndDetailsButton: 'a[title="Orders"]',
    // etc..... 
};
Object.assign(elements, basePage.elements);

const commands = {
    verifyTextOnMyAccountPageMatchesExpected: function () {
        this.api.globals.logDebug(this, 'Waiting for the Account Page header to appear');
        this.waitForElementVisible(this.elements.myAccountHeader);
        this.api.globals.logInfo(this, 'Verifying that the Account Page header contains "' + this.props.myAccountHeaderText + '" text');
        this.verify.containsText(this.elements.myAccountHeader, this.props.myAccountHeaderText);
        this.api.globals.logDebug(this, 'Waiting for the welcoming text to appear');
        this.waitForElementVisible(this.elements.welcomingTextElement);
        this.api.globals.logInfo(this, 'Verifying that the welcoming text contains "' + this.props.welcomingText + '" text');
        this.verify.containsText(this.elements.welcomingTextElement, this.props.welcomingText);
    }
};
Object.assign(commands, basePage.commands);

const sections = {
};
Object.assign(sections, basePage.sections);

module.exports = {
    props: props,
    commands: commands,
    elements: elements,
    sections: sections
};
