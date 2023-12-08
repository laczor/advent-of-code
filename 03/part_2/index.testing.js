import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import {  sumOfGearNumbers } from './index.js';

test('sumOfPartNumbers', async (t) => {
    // assert.strictEqual(sumOfGearNumbers({ filePath: '../sample.txt' }), 467835);
    assert.strictEqual(sumOfGearNumbers({ filePath: '../1-3.txt' }), 2469490);
    // assert.strictEqual(sumOfPartNumbers({ filePath: '../input.txt' }), 79842967);
});