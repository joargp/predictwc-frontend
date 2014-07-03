'use strict';

/**
 * @ngdoc service
 * @name predictwcApp.users
 * @description
 * # users
 * Factory in the predictwcApp.
 */
angular.module('predictwcApp')
  .factory('users', function ($q, dpd) {
    // Service logic
    // ...
    // Public API here
    return {
      getAll: function () {
        var deferred = $q.defer();
        dpd.users.get(function (countries) {
              deferred.resolve(countries);
        });
        return deferred.promise;
      },


    };
});
