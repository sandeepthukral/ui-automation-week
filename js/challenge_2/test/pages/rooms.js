class RoomsPage {

    get roomNumberInput() { return $('#roomNumber') }
    get roomPriceInput() { return $('#roomPrice') }
    get createRoomButton() { return $('#createRoom') }

    constructor() {
        this.roomNumberInput.waitForDisplayed({timeout: 3000});
    }
    _getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getRandomRoomNumber() {
        return `${this._getRandomInt(9)}${this._getRandomInt(9)}${this._getRandomInt(9)}`
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