
// Test one: Check to see if you can log in with valid credentials
// For this challenge it's all about creating clean, readable and maintainable code. Below
// are five tests that work (just about) but require cleaning up. Update this
// code base so that it's easier to maintain, more readable and has sensible ways of asserting
// data. You might want to research different approaches to improving UI automation such as
// Page Object Models.

import { getRandomRoomNumber, getRandomRoomPrice, getRandomName, getRandomEmail, getRandomPhoneNumber, getRandomSubject, getRandomMessage, createMessage } from "../utils/utils";

const masterPage = require('../pages/masterPage');

describe('Challenge 2 tests', () => {
    beforeEach(() => {
        browser.reloadSession();
    })

    // Test one: Check to see if you can log in with valid credentials
    it('should be able to login', () => {
        masterPage
            .visitAdminPage()
            .loginAsAdmin();
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', () => {
        const roomNumber = getRandomRoomNumber();
        const roomPrice = getRandomRoomPrice();

        masterPage
            .visit()
            .openAdminPanel()
            .loginAsAdmin()
            .createRoom(roomNumber, roomPrice)
            .verifyNewRoomEntryIsDisplayed();
    })


    // Test three: Check to see the confirm message appears when branding is updated
    it('should be able to update branding', () => {
        // browser.url('https://automationintesting.online/#/admin')
        const newName = getRandomName();
        masterPage.visitAdminPage().loginAsAdmin();
        masterPage
            .visitBrandingPage()
            .setName(newName)
            .submitForm()
            .verifyModalCloseButtonIsDisplayed();
    })

    // Test four: Check to see if the contact form shows a success message
     it('should see success message', () => {
        masterPage
            .visit()
            .submitContactForm(
                getRandomName(),
                getRandomEmail(),
                getRandomPhoneNumber(),
                getRandomSubject(),
                getRandomMessage()
            )
            .verifyContactFormIsSubmitted();
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', () => {

        // Create an unread message by calling the backend endpoint
        createMessage();

        masterPage
            .visitAdminPage()
            .loginAsAdmin();

        masterPage
            .visitAdminMessagesPage()
            .verifyAtLeastOneUnreadMessageExists();
    })


})
