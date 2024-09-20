const { expect } = require('chai')
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return -2', () => {
            expect(calculateNumber('SUM', -1.4, -0.7)).to.equal(-2);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -1', () => {
            expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
        });

        it('should return -1', () => {
            expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2', () => {
            expect(calculateNumber('DIVIDE', 8.2, 4.1)).to.equal(2);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
        });
    });
    
    it('should return 5', () => {
        expect(calculateNumber('DIVIDE', 9.9, 2.2)).to.equal(5)
    });
});
