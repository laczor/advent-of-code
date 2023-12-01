import test from 'node:test';
import assert from 'node:assert';
import { extractNumberFromLine, readFileAndExtractNumbers } from './index.js';

test('extractNumberFromLine', async (t) => {
    assert.strictEqual( extractNumberFromLine('9dlvndqbddghpxc'), 99);
    assert.strictEqual( extractNumberFromLine('two1nine'), 29);
    assert.strictEqual( extractNumberFromLine('tw1onine'), 19);
    assert.strictEqual( extractNumberFromLine('eightwothree'), 83);
    assert.strictEqual( extractNumberFromLine('abcone2threexyz'), 13);
    assert.strictEqual( extractNumberFromLine('xtwone3four'), 24);
    assert.strictEqual( extractNumberFromLine('zoneight234'), 14);
    assert.strictEqual( extractNumberFromLine('7pqrstsixteen'),76 );
    assert.strictEqual( extractNumberFromLine('sevencnq2jdjvmlh5mqnnnrsqgppkfxjfjsevendrq'),77 );
});

test('readFileAndExtractNumbers', async (t) => {
    const result = await readFileAndExtractNumbers('./sample.txt');
    assert.strictEqual(result, 281);
});