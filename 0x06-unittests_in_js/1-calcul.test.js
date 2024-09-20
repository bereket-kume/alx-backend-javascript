const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return -2', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -0.7), -2);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 4, 2), 2);
        });

        it('should return -1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.2, 4.1), 2);
        });

        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.5, 0), 'Error');
        });
    });
    
    it('should return 5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 9.9, 2.2), 5);
    });
});
