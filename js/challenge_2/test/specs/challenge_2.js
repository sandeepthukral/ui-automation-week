
// Test one: Check to see if you can log in with valid credentials
// For this challenge it's all about creating clean, readable and maintainable code. Below
// are five tests that work (just about) but require cleaning up. Update this
// code base so that it's easier to maintain, more readable and has sensible ways of asserting
// data. You might want to research different approaches to improving UI automation such as
// Page Object Models.

const loginPage = require('../pages/login');
const RoomsPage = require('../pages/rooms');
const BrandingPage = require('../pages/branding');
const masterPage = require('../pages/masterPage');
const assert = require('assert');


describe('Challenge 2 tests', () => {
    beforeEach(() => {
        browser.reloadSession();
    })

    // Test one: Check to see if you can log in with valid credentials
    it('should be able to login', () => {
        browser.url('https://automationintesting.online/#/');
        $('a[href="/#/admin"]').click();
        loginPage.loginAsAdmin();

        const element = $('=Rooms');
        
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', () => {
        // browser.url('https://automationintesting.online/#/')
        // $('a[href="/#/admin"]').click();
        masterPage
            .visit()
            .openAdminPanel()
            .loginAsAdmin();

        const roomsPage = new RoomsPage();
        const countOfRoomsBeforeTest = roomsPage.roomEntries.length;

        const roomNumber = roomsPage.getRandomRoomNumber();
        const roomPrice = roomsPage.getRandomRoomPrice();
        roomsPage.createRoom(roomNumber, roomPrice);

        // TODO See if I can move these selectors to the Page Object
        $(`#roomNumber${roomNumber}`).waitForDisplayed({ timeout: 2000});
        $(`#roomPrice${roomPrice}`).waitForDisplayed();
        
        // TODO not sure if this is really an important check
        const countOfRoomsAfterTest = roomsPage.roomEntries.length;
        assert.strictEqual(
            countOfRoomsAfterTest, 
            countOfRoomsBeforeTest + 1, 
            "The count of rooms has not changed as expected"
        );
    })


    // Test three: Check to see the confirm message appears when branding is updated
    it.only('should be able to update branding', () => {
        // browser.url('https://automationintesting.online/#/admin')
        masterPage.visitAdminPage().loginAsAdmin();

        masterPage
            .visitBrandingPage();
            // .setName(this.randomName())
            // .submitForm()
            // .confirmModalCloseButton.waitForDisplayed();

        const brandingPage = new BrandingPage();
        const newName = brandingPage.randomName;
        brandingPage.setName(newName);
        brandingPage.submitForm();

        brandingPage.confirmModalCloseButton.waitForDisplayed();
    })

    // Test four: Check to see if the contact form shows a success message
     it('should see success message', () => {
        browser.url('https://automationintesting.online')

        $('input[placeholder=\"Name\"]').setValue('TEST123');
        $('input[placeholder=\"Email\"]').setValue('TEST123@TEST.COM');
        $('input[placeholder=\"Phone\"]').setValue('01212121311');
        $('input[placeholder=\"Subject\"]').setValue('TEsTEST');
        $('textarea').setValue('TEsTESTTEsTESTTEsTEST');

        $("//button[text()=\"Submit\"]").click();

        browser.pause(3000);
        expect($("div.contact").getText()).toContain('Thanks for getting in touch')
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', () => {
        browser.url('https://automationintesting.online/#/admin/messages')

        $('//div[@class=\"form-group\"][1]/input').setValue('admin');
        $('//div[@class=\"form-group\"][2]/input').setValue('password');

        $('button.float-right').click();

        browser.pause(2000);

        expect($$('div.read-false').length).toBeGreaterThanOrEqual(1);
    })


})
