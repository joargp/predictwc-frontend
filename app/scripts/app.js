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
      .when('/matches', {
        templateUrl: 'views/matches.html',
        controller: 'MatchesCtrl'
      })
      .when('/bets', {
        templateUrl: 'views/bets.html',
        controller: 'BetsCtrl'
      })
      .when('/winners', {
        templateUrl: 'views/winners.html',
        controller: 'WinnersCtrl'
      })
      .when('/matchesAdmin', {
        templateUrl: 'views/matchesadmin.html',
        controller: 'MatchesadminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
