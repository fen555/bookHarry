/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var fen = function () {
  fen()
  if (should) {
  }
}
describe('TEST Buy Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })

  describe('Test buy Harry Potter Book', function () {
    var nightmare

    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book2')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book1')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book1')
        .wait(1000)
        .click('.book2')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('20.00')
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 2 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book1')
        .wait(1000)
        .click('.book2')
        .click('.book2')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('40.00')
    })
    it('ซื้อเล่ม 3 จำนวน 3 เล่ม, ซื้อเล่ม 4 จำนวน 3 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .wait(1000)
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1 จำนวน 1 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1 จำนวน 10 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
    it('ซื้อเล่ม 1-3 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book3')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('60.00')
    })
    it('ซื้อเล่ม 1-4 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 120', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book3')
        .click('.book4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('120.00')
    })
    it('ซื้อเล่ม 1-5 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 200', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book3')
        .click('.book4')
        .click('.book5')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('200.00')
    })
    it('ซื้อเล่ม 1-6 ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 300', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book3')
        .click('.book4')
        .click('.book5')
        .click('.book6')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('300.00')
    })
    it('ซื้อทุกเล่ม ภาคละ 1 เล่ม ส่วนลดต้องเท่ากับ 420', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book2')
        .click('.book3')
        .click('.book4')
        .click('.book5')
        .click('.book6')
        .click('.book7')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('420.00')
    })
    it('ซื้อเล่ม 3 จำนวน 6 เล่ม, ซื้อเล่ม 4 จำนวน 6 เล่ม ส่วนลดต้องเท่ากับ 120', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('120.00')
    })
    it('ซื้อเล่ม 3 จำนวน 6 เล่ม, ซื้อเล่ม 4 จำนวน 6 เล่ม, ซื้อเล่ม 5 จำนวน 6 เล่ม ส่วนลดต้องเท่ากับ 360', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book4')
        .click('.book5')
        .click('.book5')
        .click('.book5')
        .click('.book5')
        .click('.book5')
        .click('.book5')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('360.00')
    })
    it('ซื้อเล่ม 1 จำนวน 6 เล่ม, ซื้อเล่ม 2 จำนวน 5 เล่ม, ซื้อเล่ม 3 จำนวน 4 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 320', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        // .goto('http://cofen.herokuapp.com/')
        .wait(2000)
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book1')
        .click('.book2')
        .click('.book2')
        .click('.book2')
        .click('.book2')
        .click('.book2')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book3')
        .click('.book4')
        .wait(1000)
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('320.00')
    })
  })
})
