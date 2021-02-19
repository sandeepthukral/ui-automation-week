const Chance = require('chance');
class RoomsPage {
    chance = new Chance();

    get roomNumberInput() { return $('#roomNumber') }
    get roomPriceInput() { return $('#roomPrice') }
    get createRoomButton() { return $('#createRoom') }
    get roomEntries() { return $$('[data-type="room"]') }

    constructor() {
        this.roomNumberInput.waitForDisplayed({timeout: 3000});
    }

    getRandomRoomNumber() {
        return this.chance.integer({ min: 101, max: 999 });
    }

    getRandomRoomPrice() {
        return this.getRandomRoomNumber();
    }

    createRoom(roomNumber, roomPrice) {
        this.roomNumberInput.setValue(roomNumber);
        this.roomPriceInput.setValue(roomPrice);
        this.createRoomButton.click();
    }
}

module.exports = RoomsPage;