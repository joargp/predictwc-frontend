'use strict';

angular.module('predictwcApp')
  .controller('MainCtrl', function ($scope, $http, countries) {
    countries.getAll().then(function (data) {
      $scope.countries = data;
    });

});
