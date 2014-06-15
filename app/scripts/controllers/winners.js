'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:WinnersCtrl
 * @description
 * # WinnersCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('WinnersCtrl', function ($scope, countries) {
    countries.getAll().then(function (data) {
      $scope.countries = data;
    });

    dpd.users.me(function(data) {
      $scope.me = data;
    });
    $scope.save = function (winner,second,third,topScorer) {
      if ($scope.me) {
        dpd.users.put($scope.me.id, { "winner": winner, "second":second, "third":third, "topScorer": topScorer },
            function(result, err) {
              if(err) return console.log(err);
              console.log(result, result.id);
            }
        );
      }
    }
  });
