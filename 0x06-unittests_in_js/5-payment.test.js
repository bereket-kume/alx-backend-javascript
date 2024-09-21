const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    console.log.restore();
  });

  it('should log correct value', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  })
  it('should log correct', () => {
    sendPaymentRequestToApi(10, 10)
    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  })
});
