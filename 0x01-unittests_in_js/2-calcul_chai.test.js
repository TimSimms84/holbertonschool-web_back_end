/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber type == SUM', () => {
  it('add postive intergers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    expect(calculateNumber('SUM', 3.7, 1.2)).to.equal(5);
    expect(calculateNumber('SUM', 0.4, 1.5)).to.equal(2);
  });
  it('add negative intergers', () => {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    expect(calculateNumber('SUM', -1.6, -3.7)).to.equal(-6);
    expect(calculateNumber('SUM', -3.7, -1)).to.equal(-5);
    expect(calculateNumber('SUM', -3.7, -1.2)).to.equal(-5);
    expect(calculateNumber('SUM', -0.4, -1.6)).to.equal(-2);
  });
  it('add postive and negative intergers', () => {
    expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
    expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
    expect(calculateNumber('SUM', 1.2, -3.7)).to.equal(-3);
    expect(calculateNumber('SUM', 1.5, -3.7)).to.equal(-2);
    expect(calculateNumber('SUM', 3.7, -1)).to.equal(3);
    expect(calculateNumber('SUM', 3.7, -1.2)).to.equal(3);
    expect(calculateNumber('SUM', 0.4, -1.5)).to.equal(-1);
    expect(calculateNumber('SUM', -0.4, 1.5)).to.equal(2);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('sub postive intergers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 0.4, 1.6)).to.equal(-2);
  });
  it('sub negative intergers', () => {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -1.6, -3.7)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -3.7, -1)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -0.4, -1.6)).to.equal(2);
  });
  it('sub postive and negative intergers', () => {
    expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 1, -3.7)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 1.2, -3.7)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 1.5, -3.7)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 3.7, -1)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 3.7, -1.2)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 0.4, -1.6)).to.equal(2);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('div postive intergers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 4.3)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.4, 4.7)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.6, 4.5)).to.equal(0.4);
    expect(calculateNumber('DIVIDE', 1.6, 4.3)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.6, 4.7)).to.equal(0.4);
  });
  it('div negative intergers', () => {
    expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -1.4, -4.3)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -1.4, -4.7)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', -1.6, -4.6)).to.equal(0.4);
    expect(calculateNumber('DIVIDE', -1.6, -4.3)).to.equal(0.5);
  });
  it('div with zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 1.5)).to.equal(0);
  });
  it('div postive by negative intergers', () => {
    expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    expect(calculateNumber('DIVIDE', 1.4, -4.3)).to.equal(-0.25);
    expect(calculateNumber('DIVIDE', 1.4, -4.7)).to.equal(-0.2);
    expect(calculateNumber('DIVIDE', 1.6, -4.6)).to.equal(-0.4);
    expect(calculateNumber('DIVIDE', 1.6, -4.3)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 1.6, -4.7)).to.equal(-0.4);
  });
  it('div negative by postive intergers', () => {
    expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    expect(calculateNumber('DIVIDE', -1.4, 4.3)).to.equal(-0.25);
    expect(calculateNumber('DIVIDE', -1.4, 4.7)).to.equal(-0.2);
    expect(calculateNumber('DIVIDE', -1.6, 4.6)).to.equal(-0.4);
    expect(calculateNumber('DIVIDE', -1.6, 4.3)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', -1.6, 4.7)).to.equal(-0.4);
  });
});
