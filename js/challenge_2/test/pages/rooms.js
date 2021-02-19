class RoomsPage {

    roomNumber
    roomPrice

    get roomNumberInput() { return $('#roomNumber') }
    get roomPriceInput() { return $('#roomPrice') }
    get createRoomButton() { return $('#createRoom') }
    get roomEntries() { return $$('[data-type="room"]') }

    get newRoomNumberEntry() { return $(`#roomNumber${this.roomNumber}`) }
    get newRoomPriceEntry() { return $(`#roomPrice${this.roomPrice}`) }

    constructor() {
        this.roomNumberInput.waitForDisplayed({timeout: 3000});
    }

    createRoom(roomNumber, roomPrice) {
        this.roomNumber = roomNumber;
        this.roomPrice = roomPrice;
        this.roomNumberInput.setValue(roomNumber);
        this.roomPriceInput.setValue(roomPrice);
        this.createRoomButton.click();
        return this;
    }

    verifyNewRoomEntryIsDisplayed() {
        this.newRoomNumberEntry.waitForDisplayed();
        this.newRoomPriceEntry.waitForDisplayed();
    }
}

module.exports = RoomsPage;