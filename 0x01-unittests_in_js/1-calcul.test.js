/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber type == SUM', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('add postive intergers', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.equal(calculateNumber('SUM', 3.7, 1), 5);
    assert.equal(calculateNumber('SUM', 3.7, 1.2), 5);
    assert.equal(calculateNumber('SUM', 0.4, 1.5), 2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('add negative intergers', () => {
    assert.equal(calculateNumber('SUM', -1, -3), -4);
    assert.equal(calculateNumber('SUM', -1, -3.7), -5);
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
    assert.equal(calculateNumber('SUM', -1.6, -3.7), -6);
    assert.equal(calculateNumber('SUM', -3.7, -1), -5);
    assert.equal(calculateNumber('SUM', -3.7, -1.2), -5);
    assert.equal(calculateNumber('SUM', -0.4, -1.6), -2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('add postive and negative intergers', () => {
    assert.equal(calculateNumber('SUM', 1, -3), -2);
    assert.equal(calculateNumber('SUM', 1, -3.7), -3);
    assert.equal(calculateNumber('SUM', 1.2, -3.7), -3);
    assert.equal(calculateNumber('SUM', 1.5, -3.7), -2);
    assert.equal(calculateNumber('SUM', 3.7, -1), 3);
    assert.equal(calculateNumber('SUM', 3.7, -1.2), 3);
    assert.equal(calculateNumber('SUM', 0.4, -1.5), -1);
    assert.equal(calculateNumber('SUM', -0.4, 1.5), 2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('sub postive intergers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    assert.equal(calculateNumber('SUBTRACT', 0.4, 1.6), -2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('sub negative intergers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3);
    assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    assert.equal(calculateNumber('SUBTRACT', -1.6, -3.7), 2);
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1), -3);
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    assert.equal(calculateNumber('SUBTRACT', -0.4, -1.6), 2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('sub postive and negative intergers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -3), 4);
    assert.equal(calculateNumber('SUBTRACT', 1, -3.7), 5);
    assert.equal(calculateNumber('SUBTRACT', 1.2, -3.7), 5);
    assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
    assert.equal(calculateNumber('SUBTRACT', 3.7, -1), 5);
    assert.equal(calculateNumber('SUBTRACT', 3.7, -1.2), 5);
    assert.equal(calculateNumber('SUBTRACT', 0.4, -1.6), 2);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('div postive intergers', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.3), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.7), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.6, 4.5), 0.4);
    assert.equal(calculateNumber('DIVIDE', 1.6, 4.3), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.6, 4.7), 0.4);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('div negative intergers', () => {
    assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    assert.equal(calculateNumber('DIVIDE', -1.4, -4.3), 0.25);
    assert.equal(calculateNumber('DIVIDE', -1.4, -4.7), 0.2);
    assert.equal(calculateNumber('DIVIDE', -1.6, -4.6), 0.4);
    assert.equal(calculateNumber('DIVIDE', -1.6, -4.3), 0.5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('div with zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, 1.5), 0);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('div postive by negative intergers', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    assert.equal(calculateNumber('DIVIDE', 1.4, -4.3), -0.25);
    assert.equal(calculateNumber('DIVIDE', 1.4, -4.7), -0.2);
    assert.equal(calculateNumber('DIVIDE', 1.6, -4.6), -0.4);
    assert.equal(calculateNumber('DIVIDE', 1.6, -4.3), -0.5);
    assert.equal(calculateNumber('DIVIDE', 1.6, -4.7), -0.4);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('div negative by postive intergers', () => {
    assert.equal(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    assert.equal(calculateNumber('DIVIDE', -1.4, 4.3), -0.25);
    assert.equal(calculateNumber('DIVIDE', -1.4, 4.7), -0.2);
    assert.equal(calculateNumber('DIVIDE', -1.6, 4.6), -0.4);
    assert.equal(calculateNumber('DIVIDE', -1.6, 4.3), -0.5);
    assert.equal(calculateNumber('DIVIDE', -1.6, 4.7), -0.4);
  });
});
