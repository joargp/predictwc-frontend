'use strict';

/**
 * @ngdoc service
 * @name predictwcApp.isLoading
 * @description
 * # isLoading
 * Factory in the predictwcApp.
 */
angular.module('predictwcApp')
  .factory('isLoading', function () {
    // Service logic
    // ...

    var isLoading = false;

    // Public API here
    return {
      status: function () {
        return isLoading;
      },
      set: function (loading) {
        isLoading = loading;
      }
    };
  });
