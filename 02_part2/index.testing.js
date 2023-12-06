import test from 'node:test';
import assert from 'node:assert';
import { calculatePower, countPowerOfGames, findMinimalConfiguration } from './index.js';

test('findMinimalConfiguration', async (t) => {
    assert.deepEqual(findMinimalConfiguration({ game: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green' }), { red: 4, green: 2, blue: 6 });
    assert.deepEqual(findMinimalConfiguration({ game: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue' }), { red: 1, green: 3, blue: 4 });
    assert.deepEqual(findMinimalConfiguration({ game: 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red' }), { red: 20, green: 13, blue: 6 });
    assert.deepEqual(findMinimalConfiguration({ game: 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red' }), { red: 14, green: 3, blue: 15 });
    assert.deepEqual(findMinimalConfiguration({ game: 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green' }), { red: 6, green: 3, blue: 2 });
});

test('calculatePower', async (t) => {
    assert.equal(calculatePower({ red: 4, green: 2, blue: 6 }), 48);
    assert.equal(calculatePower({ red: 1, green: 3, blue: 4 }), 12);
    assert.equal(calculatePower({ red: 20, green: 13, blue: 6 }), 1560);
    assert.equal(calculatePower({ red: 14, green: 3, blue: 15}), 630);
    assert.equal(calculatePower({ red: 6, green: 3, blue: 2 }), 36);
});

test('countPowerOfGames', async (t) => {
    const filePath = './sample.txt';
    assert.strictEqual(countPowerOfGames({ filePath }), 2286);
});

