class MessagesPage {
    
    get messagesTable() { return $('div.messages') };
    get unreadMessages() { return $$('div.read-false') }
    get messages() { return $$('div.messages div.row') }

    constructor() {
        this.messagesTable.waitForDisplayed();
        browser.waitUntil(() => this.messages.length > 1 );
    }
    
    verifyAtLeastOneUnreadMessageExists() {
        expect(this.unreadMessages.length).toBeGreaterThanOrEqual(1);
    }
}

module.exports = MessagesPage;