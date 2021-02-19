const Chance = require('chance');

class BrandingPage {

    chance = new Chance();

    get nameInput() { return $('#name') }
    get submitButton() { return $('#updateBranding') }
    get confirmModalCloseButton() { return $('//button[text()="Close"]') }

    get randomName() { return this.chance.animal() }

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

}

module.exports = BrandingPage;