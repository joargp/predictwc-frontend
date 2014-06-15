'use strict';

/**
 * @ngdoc service
 * @name predictwcApp.matches
 * @description
 * # matches
 * Factory in the predictwcApp.
 */
angular.module('predictwcApp')
  .factory('matches', function($q) {
    return {
      getAll: function () {
        var deferred = $q.defer();
        dpd.matches.get({ '$sort': { 'startTime': 1 } }, function (items) {
              deferred.resolve(items);
        });
        return deferred.promise;
      },
      add: function function_name(match) {
        var deferred = $q.defer();
        dpd.matches.post({
          awayTeamId : match.awayTeamId,
          homeTeamId : match.homeTeamId,
          startTime : match.startTime
          },
          function(result, err) {
            //if(err) return console.log(err);
            deferred.resolve(result);
          }
        );
        return deferred.promise
      }
    }
  });
