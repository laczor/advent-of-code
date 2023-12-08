import test from 'node:test';
import assert from 'node:assert';
import { countPossibleGames, isValidGame } from './index.js';

test('is valid game', async (t) => {
    const configuration = { red: 12, green: 13, blue: 14 };
    assert.strictEqual(isValidGame({ game: 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', configuration }), false);
    assert.strictEqual(isValidGame({ game: 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', configuration }), false);
    assert.strictEqual(isValidGame({ game: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', configuration }), true);
    assert.strictEqual(isValidGame({ game: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', configuration }), true);
    assert.strictEqual(isValidGame({ game: 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', configuration }), true);
    assert.strictEqual(isValidGame({ game: 'Game 84: 9 green, 14 red, 11 blue; 1 green, 12 blue, 6 red; 12 green, 10 red, 7 blue; 15 green, 6 blue; 15 blue, 4 red, 6 green; 16 green, 2 red, 13 blue', configuration }), false);
});

test('checkPossibleGamges', async (t) => {
    const configuration = { red: 12, green: 13, blue: 14 };
    const filePath = './sample.txt';
    assert.strictEqual(countPossibleGames({ filePath, configuration}), 8);
});

