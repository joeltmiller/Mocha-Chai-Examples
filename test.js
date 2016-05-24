var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var app = require('./app');

describe('app', function() {

  describe('doubleIt', function() {
    it('should return the double of parameter', function () {
      assert.equal(app.doubleIt(2), 4);
    });
    it('should return 18 when given 9', function (){
      assert.equal(app.doubleIt(9), 18);
    })
  })

  describe('timesTen', function (){
    it('should return ten times a given value', function(){
      expect(app.timesTen(10)).to.equal(100);
    })

    it('should return a number', function (){
      expect(app.timesTen(5)).to.be.a('number');
    })
  })

  describe('randomNum', function (){
    it('should return something', function (){
      app.randomNum(1, 1000).should.exist;
    })
    it('should return a number less than max', function (){
      app.randomNum(1, 10).should.be.below(11);
    })
    it('should return a number greater than min', function (){
      app.randomNum(1, 90).should.be.above(0);
    })
    it('should be within range', function (){
      app.randomNum(88, 984).should.be.within(88, 984);
    })
  })

})
