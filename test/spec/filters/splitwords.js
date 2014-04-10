'use strict';

describe('Filter: splitWords', function () {

  // load the filter's module
  beforeEach(module('angularAppApp'));

  // initialize a new instance of the filter before each test
  var splitWords;
  beforeEach(inject(function ($filter) {
    splitWords = $filter('splitWords');
  }));

  it('should return the input splitted into an array of its words', function () {
    var text = 'angularjs, web, technology';
    expect(splitWords(text,', ')).toEqual(['angularjs','web','technology']);
  });

});
