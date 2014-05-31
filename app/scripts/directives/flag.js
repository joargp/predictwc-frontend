'use strict';

angular.module('predictwcApp')
  .directive('flag', function () {
    return {
      templateUrl: '/views/directives/flag.html',
      restrict: 'E'
    };
  });
