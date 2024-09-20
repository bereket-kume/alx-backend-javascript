const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');

describe('sendPaymentRequestToApi', () => {
    it('should call utils.calculateNumber with correct arguments', () => {
        const myStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy = sinon.spy(console, "log");
        
        sendPaymentRequestToApi(100, 20);
        
        assert(myStub.calledOnce);
        assert(spy.calledWith("The total is: 10"));
        assert(myStub.calledWith('SUM', 100, 20));
        
        myStub.restore();
        spy.restore();
    });
});
