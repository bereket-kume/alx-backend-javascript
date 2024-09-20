const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    it('should call utils.calculateNumber with correct arguments', () => {
        const myStub = sinon.stub(Utils, 'calculateNumber')
        myStub.returns(10)
        sendPaymentRequestToApi(100, 20);
        assert(myStub.calledOnce);
        assert(myStub.calledWith('SUM', 100, 20));
        myStub.restore();
    });
    it('should log the correct message', () => {
        sendPaymentRequestToApi(100, 20);
        expect(myStub.calledWith('The total is: 10')).to.be.true;
    });
});
