const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    console.log.restore();
  });

  it('should log correct value', () => {
    sendPaymentRequestToApi('SUM', 100, 20);
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  })
  it('should log correct', () => {
    sendPaymentRequestToApi('SUM', 10, 10)
    expect(console.log.withArgs("The total is: 20").calledOnce).to.true;
  })
});
