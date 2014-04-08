'use strict';

// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// MOCHA-CHAI VERSIONS -------------
describe('no protractor at all', function() {
  it('should still do normal tests', function() {
    expect(true).to.equal(true);
  });
});

describe('protractor library', function() {
  it('should expose the correct global variables', function() {
    expect(protractor).to.exist;
    expect(browser).to.exist;
    expect(by).to.exist;
    expect(element).to.exist;
    expect($).to.exist;
  });

  it('should wrap webdriver', function() {
    browser.get('http://www.angularjs.org');
    expect(browser.getTitle()).to.eventually.equal('AngularJS — Superheroic JavaScript MVW Framework');
  });
});

describe('angularjs homepage', function() {
 
  beforeEach(function() {
  });

  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).to.eventually.equal('Hello Julie!');
  });

describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).to.eventually.equal(2);
      expect(todoList.get(1).getText()).to.eventually.equal('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).to.eventually.equal(3);
      expect(todoList.get(2).getText()).to.eventually.equal('write a protractor test');
    });
});

// JASMINE VERSIONS -------------
  // it('should greet the named user', function() {
  //   var chai;
  //   var chaiAsPromised;
  //   // var expect;
  //   var ptor ;
 
  //   chai=require('chai');
  //   chaiAsPromised=require('chai-as-promised');
  //   chai.use(chaiAsPromised);
  //   // expect=chai.expect;
  //   ptor = protractor.getInstance();
  //   // Load the AngularJS homepage.
  //   browser.get('http://www.angularjs.org');

  //   element(by.model('yourName')).sendKeys('Julie');

  //   var greeting = element(by.binding('yourName'));

  //   expect(greeting.getText()).toEqual('Hello Julie!');
  // });

// describe('todo list', function() {
//     var todoList;

//     beforeEach(function() {
//       browser.get('http://www.angularjs.org');

//       todoList = element.all(by.repeater('todo in todos'));
//     });

//     it('should list todos', function() {
//       expect(todoList.count()).toEqual(2);
//       expect(todoList.get(1).getText()).toEqual('build an angular app');
//     });

//     it('should add a todo', function() {
//       var addTodo = element(by.model('todoText'));
//       var addButton = element(by.css('[value="add"]'));

//       addTodo.sendKeys('write a protractor test');
//       addButton.click();

//       expect(todoList.count()).toEqual(3);
//       expect(todoList.get(2).getText()).toEqual('write a protractor test');
//     });
// });

});
