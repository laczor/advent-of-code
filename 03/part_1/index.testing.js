import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import {  sumOfPartNumbers, sumSymbols } from './index.js';

// test('sumSymbols', async (t) => {
//     assert.deepEqual(sumSymbols({ row: '467..114..', nextRow: '...*......', previousRow: '' }), 467);
//     assert.deepEqual(sumSymbols({ row: '..35..633.', nextRow: '......#...', previousRow: '...*......' }), 668);
//     assert.deepEqual(sumSymbols({ row: '617*......', nextRow: '.....+.58.', previousRow: '......#...' }), 617);
// });

test('sumSymbols 1-3', async (t) => {
    const data = fs.readFileSync('../1-3.txt', 'utf-8').split(/\r?\n/);
    assert.deepEqual(sumSymbols({ row: data[0], nextRow: data[1] , previousRow: '' }), 6049);
    assert.deepEqual(sumSymbols({ row: data[1], nextRow: data[2] , previousRow: data[0] }), 3283);
    assert.deepEqual(sumSymbols({ row: data[2], nextRow: '' , previousRow: data[1] }), 2494);
});

test('sumOfPartNumbers', async (t) => {
    assert.strictEqual(sumOfPartNumbers({ filePath: '../sample.txt' }), 4361);
    assert.strictEqual(sumOfPartNumbers({ filePath: '../1-3.txt' }), 11826);
    assert.strictEqual(sumOfPartNumbers({ filePath: '../input.txt' }), 532445);
});