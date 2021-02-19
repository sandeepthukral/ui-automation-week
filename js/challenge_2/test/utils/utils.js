const Chance = require('chance');
const chance = new Chance();

export function getRandomRoomNumber() {
    return chance.integer({ min: 101, max: 999 });
}

export function getRandomRoomPrice() {
    return getRandomRoomNumber();
}

export function getRandomName() { 
    return chance.word({ length: 8 }); 
}

export function getRandomEmail() {
    return chance.email({domain: 'thisdoesnotexist.com'})
}

export function getRandomSubject() {
    return chance.sentence({words: 3}).slice(0,19);
}

export function getRandomMessage() {
    return chance.sentence({words: 10});
}

export function getRandomPhoneNumber() {
    return chance.integer({ min:60000000000, max:90000000000 })
}
