const Chance = require('chance');
const chance = new Chance();

export function getRandomRoomNumber() {
    return chance.integer({ min: 101, max: 999 });
}

export function getRandomRoomPrice() {
    return getRandomRoomNumber();
}