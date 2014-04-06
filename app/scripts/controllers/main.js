'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('TagManagerController', function() {
    this.searchString = '';
    this.SearchTags = [];
    this.MatchingTags = [];

    this.getTagsFromSearchString = function getTagsFromSearchString() {
      this.SearchTags = this.searchString.split(' ');
      return this.SearchTags;
    };

    this.searchTags = function searchTags() {
      return ;
    };

    this.getMatchingTags = function getMatchingTags() {
      this.MatchingTags = this.SearchTags.slice(1,2);
      this.MatchingTags = this.MatchingTags.concat(this.SearchTags.slice(3,4));
      return this.MatchingTags;
    };
  })
;