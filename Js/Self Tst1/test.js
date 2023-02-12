const chai = require('chai')

var expect = chai.expect //  require('chai').expect

const validateObj = require('./index.js');
describe("Validating  the values by using function", () => {
    var num1 = 19;
    var num2=8;
    // var num2 = 9;
    // var num;


    // beforeEach(() => {
    //      num1=8;
    //      num2=25;

    // })}
    beforeEach(() => {
        // num1 = 8;
        num2 = 12;
    })

    it("Should return true if number between 10 to 100", () => {
        expect(validateObj.ValidateNum(num1)).to.be.true
    })

    it("Should return false if number not between 10 to 100", () => {
        expect(validateObj.ValidateNum(num2)).to.be.false
    })

    // it("Should return false if number not between 10 to 100",()=>{
    //     expect(validateObj.ValidateNum(101)).to.be.false
    // })

    // it("Should return false if number is less than equal to 10", () => {
    //     expect(validateObj.ValidateNum(num3)).to.be.false
    // })

    // it("Should return false if number greater than equal to 100", () => {
    //     expect(validateObj.ValidateNum(num4)).to.be.false
    // })

})