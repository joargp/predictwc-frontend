'use strict';

/**
 * @ngdoc directive
 * @name predictwcApp.directive:loading
 * @description
 * # loading
 */
angular.module('predictwcApp')
  .directive('loading',   ['$http', 'isLoading' ,function ($http,isLoading)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return isLoading.status() || $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if (v) {
                        elm.show();
                    } else {
                        elm.hide();
                    }
                });
            }
        };

    }]);
