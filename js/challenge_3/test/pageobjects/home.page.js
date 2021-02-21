
class HomePage {
 
    get imgHotelLogo () { return $('.hotel-logoUrl') }
    get imgRooms () { return $$('.hotel-img') }
    get imgMaps () { return $$('.map img') }
    get map() { return $('.map') }
    get firstRoom() { return $$('.hotel-room-info')[0] }
    get bannerSection() { return $('#collapseBanner')}
    get contactSection() { return $('.contact') }

    visit() {
        browser.url('https://automationintesting.online/');
    }
}

module.exports = new HomePage();
