'use strict';

// // Use the external Chai As Promised to deal with resolving promises in
// // expectations.
// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

// var expect = chai.expect;
// // var assert = require('chai').assert;

describe('Controller: TabularresultCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var TabularresultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabularresultCtrl = $controller('TabularresultCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should return results', function () {
    scope.getResults();
    expect(scope.results.length).toBe(4);
    expect(JSON.stringify(scope.results[0])).toEqual('{"tagList":["technology","web"],"companyName":"Amazon"}');
    expect(JSON.stringify(scope.results[1])).toEqual('{"tagList":["technology","entrepreneurship"],"companyName":"Google"}');
  });
});
