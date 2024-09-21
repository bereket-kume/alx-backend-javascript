const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai")

describe("getPaymentTokenFromApi", () => {
    it("async testing with done callback", (done) => {
        getPaymentTokenFromAPI(true)
          .then((data) => {
            expect(data).to.have.property('data');
            done();
          });
    });
});
