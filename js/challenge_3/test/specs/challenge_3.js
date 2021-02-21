const HomePage = require('../pageobjects/home.page');

//    Welcome to UI Automation Challenge 3
//
//    For this challenge the focus is improving the assertion for an existing
//    UI automation test. Rather than asserting on the DOM's state, update the
//    the test below to do a visual check of the page. Once you've completed
//    the sample test, create your own example test.

describe('Challenge 3 Tests', () => {
    [ 
        {width: 1200, height: 1013, type: 'desktop'}
    ].forEach(testData => {
        it(`should check the home page images for viewport ${testData.type}`, () => {
            // setup the mock for the network calls for the map
            const mockMapRequests = browser.mock('**/**fastly.net/**')

            browser.setWindowSize(testData.width, testData.height);
    
            HomePage.visit();
            
            // visual regression for the hotel logo
            HomePage.imgHotelLogo.scrollIntoView();
            expect(browser.checkElement(HomePage.imgHotelLogo, 'Homepage image logo')).toEqual(0);
            
            // visual regression for the first room
            // it has been observed that the first room is seeded on every refresh of the DB
            HomePage.firstRoom.scrollIntoView();
            expect(browser.checkElement(HomePage.firstRoom, 'Homepage - first room')).toEqual(0);
            
            // visual regression for the map
            HomePage.map.scrollIntoView();
            // wait for the map to load completely
            // wait first for calls for the map to be created
            browser.waitUntil(() => {
                console.log(`Number of mocked calls ... ${mockMapRequests.calls.length}`)
                return mockMapRequests.calls.length === 15
            })
            // wait for all the calls to complete
            browser.waitUntil(() => {
                const statusCodes = mockMapRequests.calls.map(call => call.statusCode);
                return statusCodes.every(statusCode => statusCode === 200);
            })
            expect(browser.checkElement(HomePage.map, 'Homepage - map')).toEqual(0);
        });
    })

    // it('your turn', () => {
    //     Create your own demonstration of a visual check
    // });

});

