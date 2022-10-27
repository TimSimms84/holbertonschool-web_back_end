/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('postive intergers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(3.7, 1), 5);
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('negative intergers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
    assert.strictEqual(calculateNumber(-3.7, -1), -5);
    assert.strictEqual(calculateNumber(-3.7, -1.2), -5);
  });
});
