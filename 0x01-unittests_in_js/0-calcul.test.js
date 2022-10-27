/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('postive intergers', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(3.7, 1), 5);
    assert.equal(calculateNumber(3.7, 1.2), 5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('negative intergers', () => {
    assert.equal(calculateNumber(-1, -3), -4);
    assert.equal(calculateNumber(-1, -3.7), -5);
    assert.equal(calculateNumber(-1.2, -3.7), -5);
    assert.equal(calculateNumber(-1.6, -3.7), -6);
    assert.equal(calculateNumber(-3.7, -1), -5);
    assert.equal(calculateNumber(-3.7, -1.2), -5);
  });
});
