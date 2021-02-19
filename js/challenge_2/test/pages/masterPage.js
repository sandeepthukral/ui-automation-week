const BrandingPage = require('./branding');
const LoginPage = require('./login');

class MasterPage {

    get adminPanelLink() { return $('a[href="/#/admin"]') }

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
}

module.exports = new MasterPage();