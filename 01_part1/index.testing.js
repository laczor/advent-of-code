import test from 'node:test';
import assert from 'node:assert';
import { readFileAndExtractNumbers } from './index.js';

test('synchronous passing test', async (t) => {
    const result = await readFileAndExtractNumbers('./sample.txt');
    assert.strictEqual(result, 142);
});