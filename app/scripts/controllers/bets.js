'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:BetsCtrl
 * @description
 * # BetsCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('BetsCtrl', function ($scope, matches, bets) {
    matches.getAll().then(function (data) {
      $scope.matches = data;
    });
    $scope.addBet = function function_name(match, home) {
      match.locked = true;
      console.log(home);
      bets.add(match).then(function (bet) {
        //$scope.matches.unshift(data);
      });
    }
  });
