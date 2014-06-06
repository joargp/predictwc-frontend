'use strict';

angular
  .module('predictwcApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/countries', {
        templateUrl: 'views/countries.html',
        controller: 'CountriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
