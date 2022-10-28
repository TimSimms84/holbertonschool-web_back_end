/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const request = require('request');

describe('test suite', () => {
  it('test that GET returns correct status code and result', () => new Promise((done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      expect(response.request.method).to.be.equal('GET');
      done();
    });
  }));
  it('test /cart/id', (done) => {
    request('http://localhost:7865/cart/1', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      expect(response.request.method).to.be.equal('GET');
      done();
    });
  });
  it('test /cart/id failing', (done) => {
    request('http://localhost:7865/cart/1a', (error, response) => {
      expect(response.statusCode).to.equal(404);
      expect(response.request.method).to.be.equal('GET');
      done();
    });
  });
  it('test /available_payments', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      expect(response.request.method).to.be.equal('GET');
      done();
    });
  });
  it('test /login', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Timmy' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Timmy');
      expect(response.request.method).to.be.equal('POST');
      done();
    });
  });
});
