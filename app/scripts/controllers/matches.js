'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:MatchesCtrl
 * @description
 * # MatchesCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('MatchesCtrl', function ($scope, matches, countries, isLoading) {
    isLoading.set(true);
    countries.getAll().then(function (data) {
      $scope.countries = data;
    });
    matches.getAll().then(function (data) {
      $scope.matches = data;
      isLoading.set(false);
    });
    $scope.match = {
      homeTeam : '',
      awayTeam : '',
      time : '',
      date: ''
    };
    $scope.addMatch = function function_name(match) {
      match.startTime = new Date(match.date + " " + match.time).getTime();
      matches.add(match).then(function (data) {
        $scope.matches.unshift(data);
      });
    }
  });
