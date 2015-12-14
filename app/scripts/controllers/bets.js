'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:BetsCtrl
 * @description
 * # BetsCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('BetsCtrl', function ($scope, matches, bets, users, dpd, _, isLoading) {
    isLoading.set(true);
    matches.getAll().then(function (mItems) {
      bets.getAll().then(function (bItems) {
        users.getAll().then(function (uItems) {
          bItems = _.forEach(bItems, function (bet) {
            bet.username = _.find(uItems, { "id" : bet.userId }).username;
            $scope.matches = _.forEach(mItems, function (match) {
              match.bets = _.where(bItems, { 'matchId': match.id });
            });
            isLoading.set(false);
          });
        });
      });

    });

    $scope.addBet = function function_name(match, home) {
      match.locked = true;
      bets.add(match).then(function (bet) {
        //$scope.matches.unshift(data);
      });
    }
  });
