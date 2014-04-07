'use strict';

describe('Controller: TagmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var TagmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagmanagerCtrl = $controller('TagmanagerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  
  it('should create and Initialize a series of members', function () {
    expect(TagmanagerCtrl.searchString).toBe('');
    expect(TagmanagerCtrl.SearchTags.length).toBe(0);
    expect(TagmanagerCtrl.MatchingTags.length).toBe(0);
  });

  it('should parse the search string', function () {
    TagmanagerCtrl.searchString = 'La lluvia en sevilla es una pura maravilla';

    // Expect members to exist
    expect(TagmanagerCtrl.getTagsFromSearchString().length).toBe(8);
    expect(TagmanagerCtrl.getTagsFromSearchString()).toEqual(['La','lluvia','en','sevilla','es','una','pura','maravilla']);
  });

  it('should get the matching tags', function () {
    TagmanagerCtrl.searchString = 'La lluvia en sevilla es una pura maravilla';
    TagmanagerCtrl.getTagsFromSearchString();

    // Expect members to exist
    expect(TagmanagerCtrl.getMatchingTags().length).toBe(2);
    expect(TagmanagerCtrl.getMatchingTags()).toEqual(['lluvia','sevilla']);
  });

});
