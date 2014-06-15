'use strict';

angular.module('predictwcApp')
  .factory('countries', function ($q) {
    // Service logic
    // ...
    // Public API here
    return {
      getAll: function () {
        var deferred = $q.defer();
        dpd.countries.get({ '$sort': { 'name': 1 } }, function (countries) {
              deferred.resolve(countries);
        });
        return deferred.promise;
      },
      add: function function_name(country) {
        var deferred = $q.defer();
        dpd.countries.post({ "name" : country.name, "groupId" : country.groupId,
            "flagCode" : country.flagCode
          }, function(result, err) {
          //if(err) return console.log(err);
          deferred.resolve(result);
        });
        return deferred.promise
      }

    };
  });
