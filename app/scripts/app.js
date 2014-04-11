'use strict';

angular
  .module('angularAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'countrySelect'
    // 'Glossary'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tabularResult', {
        templateUrl: 'views/tabularresult.html',
        controller: 'TabularresultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
