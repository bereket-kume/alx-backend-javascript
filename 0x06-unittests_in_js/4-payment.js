const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: 10`);
}

module.exports = sendPaymentRequestToApi;
