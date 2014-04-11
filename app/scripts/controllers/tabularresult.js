'use strict';

angular.module('angularAppApp')
  .controller('TabularresultCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.results = [
				{'tagList': ['technology', 'web'], 'companyName': 'Amazon'},
				{'tagList': ['technology', 'entrepreneurship'], 'companyName': 'Google'}
			];

    $scope.getResults =  function getResults() {
			$scope.results = [
				{'tagList': ['technology', 'web'], 'companyName': 'Amazon'},
				{'tagList': ['technology', 'entrepreneurship'], 'companyName': 'Google'},
				{'tagList': ['entrepreneurship', 'web'], 'companyName': 'Facebook'},
				{'tagList': ['technology'], 'companyName': 'Twitter'}
			];
    };
  });
