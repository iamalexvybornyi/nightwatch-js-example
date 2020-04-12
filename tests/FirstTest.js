module.exports = {
    'First test case'(browser) {
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible('img[class="logo img-responsive"]')
            .assert.containsText('div[id="contact-link"] a', 'Contact us')
            .assert.containsText('div[class="header_user_info"] a', 'Sign in');
    }
}
