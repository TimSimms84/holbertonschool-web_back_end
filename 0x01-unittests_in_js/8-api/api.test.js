const { expect } = require('chai');
const request = require('request');

describe('api testing', () => {
  it('test get returns status code and restult', () => new Promise((done) => {
    request('localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
