const Chance = require('chance');

class BrandingPage {

    chance = new Chance();

    get nameInput() { return $('#name') }
    get submitButton() { return $('#updateBranding') }
    get confirmModalCloseButton() { return $('//button[text()="Close"]') }

    constructor() {
        this.nameInput.waitForDisplayed();
    }

    setName(name) {
        this.nameInput.clearValue()
        this.nameInput.setValue(name)
        return this;
    }

    submitForm() {
        this.submitButton.click();
        return this;
    }

    verifyModalCloseButtonIsDisplayed() {
        this.confirmModalCloseButton.waitForDisplayed();
    }

}

module.exports = BrandingPage;