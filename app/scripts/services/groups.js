'use strict';

angular.module('predictwcApp')
  .factory('groups', function ($q) {
      // Service logic
      // ...
      // Public API here
      return {
        getAll: function () {
          var deferred = $q.defer();
          dpd.groups.get(function (items) {
                deferred.resolve(items);
          });
          return deferred.promise;
        }
      };
  });
