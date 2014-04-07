'use strict';

describe('Datosfera App', function() {
 
  describe('Main view', function() {
 
    beforeEach(function() {
      browser.get('/');
      // var ptor = protractor.getInstance();
    });
 
 
    it('should filter the phone list as user types into the search box', function() {
      var chai=require('chai');
      var chaiAsPromised=require('chai-as-promised');
      chai.use(chaiAsPromised);
      var expect=chai.expect;
      var ptor = protractor.getInstance();

      

      expect('hola').to.be.a('string');
      expect('hola').to.equal('hola');
      expect(null).to.be.null;
      expect(undefined).not.to.be.null;

      browser.debugger();
      
      var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      // var searchString = element(by.model('tagManager.searchString'));
      var searchString = by.model('tagManager.searchString');

      // expect(ptor.isElementPresent(tagList)).toBe(true);
      expect(ptor.isElementPresent(searchString)).toBe(true);

      expect(tagList).not.to.be.null;
      expect(tagList).to.not.be.undefined;
      expect(tagList).to.exist;
      
      expect(tagList.count).not.to.be.null;
      expect(tagList.count).to.not.be.undefined;
      expect(tagList.count).to.exist;
      
      expect(searchString).to.equal('');
      expect(searchString.length).to.equal(0);
      expect(tagList.length).to.equal(2);
      

      // assert.equal(0,tagList.count());


      searchString.sendKeys('la lluvia');
      // expect(3).to.be.a('int');
      // expect(tagList.count()).to.be.a('int');
      // expect(tagList.count()).to.equal(2);
 
      // searchString.clear();
      // searchString.sendKeys('la lluvia en sevilla es una pura maravilla');
      // expect(tagList.count()).toBe(8);
    });
  });
});