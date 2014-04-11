'use strict';

// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = require('chai').assert;


describe('Datosfera App', function() {
 
  describe('the TabularResults view', function() {

    beforeEach(function() {
      browser.get('http://127.0.0.1:9000/#/tabularResult');
    });

    it('should load the page', function(){
      var ele = by.id('content'); // Genera un {"using":"id","value":"viewsContainer"} per usar amb element() o amb isElementPresent
      expect(element(ele).isPresent()).to.eventually.be.true;

      ele = by.id('resultTable');
      expect(element(ele).isPresent()).to.eventually.be.true;
    });

    it('should show some result', function(){
      var ele = by.model('tabularResult'); // Genera un {"using":"id","value":"viewsContainer"} per usar amb element() o amb isElementPresent
      // expect(element(ele).isPresent()).to.eventually.be.true;
      expect(element(by.tagName('li')).isPresent()).to.eventually.be.true;
     });

  });

});