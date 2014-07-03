'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:MatchesCtrl
 * @description
 * # MatchesCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('MatchesadminCtrl', function ($scope, matches, countries) {
    countries.getAll().then(function (data) {
      $scope.countries = data;
    });
    matches.getAll().then(function (data) {
      $scope.matches = data;
    });
    $scope.match = {
      homeTeam : '',
      awayTeam : '',
      time : '',
      date: ''
    };
    $scope.updateMatch = function function_name(matchId, homeScore, awayScore) {
      matches.add(match).then(function (data) {
        $scope.matches.unshift(data);
      });
    }
  });
