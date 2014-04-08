'use strict';

// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

describe('Datosfera App', function() {
 
  describe('Main view', function() {
    
    beforeEach(function() {
      browser.get('http://127.0.0.1:9000/');
    });

    it('should load the homepage', function(){
      var ele = by.id('viewsContainer'); // Genera un {"using":"id","value":"viewsContainer"} per usar amb element() o amb isElementPresent
      expect(element(ele).isPresent()).to.eventually.be.true;

      ele = by.id('mainPageHeader');
      expect(element(ele).isPresent()).to.eventually.be.true;
    });
 
    it('should have the model and the repeater', function() {
      var searchString = element(by.model('tagManager.searchString'));
      var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      
      expect(searchString.isPresent()).to.eventually.be.true;
      expect(searchString.getText()).to.eventually.equal('');
 
      expect(tagList.count()).to.eventually.equal(1);
      
    });

    it('should accept input into the search box', function() {
      var searchString = element(by.model('tagManager.searchString'));
      var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      
      searchString.sendKeys('la lluvia');
      expect(searchString.getText()).to.eventually.equal('la lluvia');
 
      searchString.clear();
      searchString.sendKeys('la lluvia en sevilla es una pura maravilla');
      expect(searchString.getText()).to.eventually.equal('la lluvia en sevilla es una pura maravilla');
    });
 
    it('should parse the search box', function() {
      var searchString = element(by.model('tagManager.searchString'));
      var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      
      searchString.sendKeys('la lluvia');
      expect(tagList.count()).to.eventually.equal(2);
 
      searchString.clear();
      searchString.sendKeys('la lluvia en sevilla es una pura maravilla');
      expect(tagList.count()).to.eventually.equal(8);
    });

    it('should get the 2nd and forth parsed tags from the search box', function() {
      var searchString = element(by.model('tagManager.searchString'));
      var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      var searchButton = element(by.className('btn'));
      var matchingTags= element(by.model('tagManager.MatchingTags'))
      
      expect(searchButton.isPresent()).to.eventually.be.true;
      // expect(matchingTags.isPresent()).to.eventually.be.true;
 
      searchString.clear();
      searchString.sendKeys('la lluvia en sevilla es una pura maravilla');
      searchButton.click();
      expect(matchingTags.getText()).to.eventually.equal(["lluvia","sevilla"]);
    });

  });


// JASMINE VERSIONS -------------
// });// describe('Datosfera App', function() {
 
//   describe('Main view', function() {
//     beforeEach(function() {
//       browser.get('http://127.0.0.1:9000/');
//     });

//     it('should load the homepage', function(){
//       var ele = by.id('viewsContainer'); // Genera un {"using":"id","value":"viewsContainer"} per usar amb element() o amb isElementPresent
//       expect(element(ele).isPresent()).toBe(true);

//       ele = by.id('mainPageHeader');
//       expect(element(ele).isPresent()).toBe(true);
//     });
 
 
//     it('should filter the phone list as user types into the search box', function() {

//       browser.get('http://127.0.0.1:9000/');

//       var searchString = element(by.model('tagManager.searchString'));
//       var tagList = element.all(by.repeater('c in tagManager.getTagsFromSearchString()'));
      
//       expect(searchString.isPresent()).toBe(true);
//       expect(searchString.getText()).toBe('');
 
//       expect(tagList.count()).toBe(1);
      
//       searchString.sendKeys('la lluvia');
//       expect(tagList.count()).toEqual(2);
 
//       searchString.clear();
//       searchString.sendKeys('la lluvia en sevilla es una pura maravilla');
//       expect(tagList.count()).toEqual(8);
//     });
//   });
});