'use strict';

/**
 * @ngdoc service
 * @name predictwcApp.bets
 * @description
 * # bets
 * Factory in the predictwcApp.
 */
angular.module('predictwcApp')
  .factory('bets', function($q) {
  return {
    getAll: function () {
      var deferred = $q.defer();
      dpd.matches.get(function (items) {
            deferred.resolve(items);
      });
      return deferred.promise;
    },
    add: function function_name(bet) {
      var deferred = $q.defer();
      console.log(bet);
      dpd.bets.post({
        homeScore : bet.chosenHomeScore,
        awayScore : bet.chosenAwayScore,
        matchId : bet.id
        },
        function(result, err) {
          if(err) return console.log(err);
          deferred.resolve(result);
        }
      );
      return deferred.promise
    }
  }
});
