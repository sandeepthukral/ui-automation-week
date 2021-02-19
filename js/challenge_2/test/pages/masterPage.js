const BrandingPage = require('./branding');
const LoginPage = require('./login');

class MasterPage {

    get adminPanelLink() { return $('a[href="/#/admin"]') }

    get nameInput() { return $('#name') }
    get emailInput() { return $('#email') }
    get phoneInput() { return $('#phone') }
    get subjectInput() { return $('#subject') }
    get messageInput() { return $('#description') }
    get submitButton() { return $('#submitContact') }

    visit() {
        browser.url('https://automationintesting.online/#/')
        this.adminPanelLink.waitForDisplayed();
        return this;
    }
    
    visitAdminPage() {
        browser.url('https://automationintesting.online/#/admin');
        return new LoginPage();
    }

    visitBrandingPage() {
        browser.url('https://automationintesting.online/#/admin/branding');
        return new BrandingPage();
    }

    openAdminPanel() {
        this.adminPanelLink.click();
        return new LoginPage();
    }

    submitContactForm(name, email, phone, subject, message) {
        this.nameInput.setValue(name);
        this.emailInput.setValue(email);
        this.phoneInput.setValue(phone);
        this.subjectInput.setValue(subject);
        this.messageInput.setValue(message);
        this.submitButton.click();
        return this;
    }

    verifyContactFormIsSubmitted() {
        $('h2*=Thanks for getting in touch').waitForDisplayed();
        return this;
    }
}

module.exports = new MasterPage();