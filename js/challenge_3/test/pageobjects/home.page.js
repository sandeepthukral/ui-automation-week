
class HomePage {
 
    get imgHotelLogo () { return $('.hotel-logoUrl') }
    get imgRooms () { return $$('.hotel-img') }
    get imgMaps () { return $$('.map img') }
    get map() { return $('.map') }
    get firstRoom() { return $$('.hotel-room-info')[0] }

    visit() {
        browser.url('https://automationintesting.online/');
    }
}

module.exports = new HomePage();
