const chai = require('chai')
var expect = chai.expect;
const validObj = require('./index.js')

describe("Validating the arguments", () => {

    var num = 15;

    it("Should return true if number is between 10 and 100", () => {
        expect(validObj.validatenumber(num)).to.be.true;
    })
    it("Should return false if number is less than equal to 10", () => {
        expect(validObj.validatenumber(num)).to.be.false;
    })
    it("Should return false if number is not  between 10 and 100", () => {
        expect(validObj.validatenumber(num)).to.be.false;
    })
    it("Should return false if number is greater than and equal to 100", () => {
        expect(validObj.validatenumber(num)).to.be.false;
    })
})