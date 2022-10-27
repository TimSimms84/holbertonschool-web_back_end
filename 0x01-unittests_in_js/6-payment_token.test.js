/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('test resolve promise', (done) => {
    getPaymentTokenFromApi(true)
      .then((response) => {
        // eslint-disable-next-line jest/valid-expect
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      });
  });
});
