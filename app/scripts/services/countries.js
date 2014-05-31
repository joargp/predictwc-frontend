'use strict';

angular.module('predictwcApp')
  .factory('countries', function ($q) {
    // Service logic
    // ...
    // Public API here
    return {
      getAll: function () {
        var deferred = $q.defer();
        dpd.countries.get(function (countries) {
              deferred.resolve(countries);
        });
        return deferred.promise;
      }
    };
  });
