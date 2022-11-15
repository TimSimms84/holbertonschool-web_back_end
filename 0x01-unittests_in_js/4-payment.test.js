/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  const spyConsole = sinon.spy(console, 'log');
  // eslint-disable-next-line jest/expect-expect
  it('sendPaymentRequestToApi', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.calledWith('SUM', 100, 20);
    sendPaymentRequestToApi(100, 20);
    spyConsole.calledWith('The total is: 10');
    stubUtils.returns(10);
    stubUtils.restore();
    spyConsole.restore();
  });
});
