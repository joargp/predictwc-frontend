'use strict';

angular.module('predictwcApp')
  .directive('flagIcon', function () {
    return {
      templateUrl: '/views/directives/flag-icon.html',
      restrict: 'E'
    };
  });
