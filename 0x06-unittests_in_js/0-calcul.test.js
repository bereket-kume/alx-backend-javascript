const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul')


describe('calculateNumber', function() {
    it('should return 4 when inputs are 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7',() => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numers correctly', () => {
        assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
    });

    it('should return 0 when both inputs are 0.4', () => {
        assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    });

    it('should return -2 when oth inputs are -1.4 and -0.7', () => {
        assert.strictEqual(calculateNumber(-1.4, -0.7), -2);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
      });

      it('should return 10 when both inputs are integers 5 and 5', () => {
        assert.strictEqual(calculateNumber(5, 5), 10);
    });

})
