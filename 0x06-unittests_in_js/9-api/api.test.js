const request = require('request');
const { expect } = require('chai');

describe("index page", () => {
   it('should return status code 200', (done) => {
    request("http://localhost:7865", (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
    });
   });
  it("should return the correct message", (done) => {
    request("http://localhost:7865", (err, res, body) => {
        expect(body).to.equal("Welcome to the payment system");
        done();
    });
  });
});

describe("cart page", () => {
    it("should return status code", (done) => {
        request("http://localhost:7865/cart/12", (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal("Payment methods for cart 12");
            done();
        });
    });

    it("should return statusCode 404", (done) => {
        request("http://localhost:7865/cart/abc", (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    })
});
