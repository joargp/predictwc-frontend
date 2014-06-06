'use strict';

/**
 * @ngdoc function
 * @name predictwcApp.controller:CountriesCtrl
 * @description
 * # CountriesCtrl
 * Controller of the predictwcApp
 */
angular.module('predictwcApp')
  .controller('CountriesCtrl', function ($scope, countries, groups) {
    countries.getAll().then(function (data) {
      $scope.countries = data;
    });
    groups.getAll().then(function (data) {
      $scope.groups = data;
    });
    $scope.country = {
      name : '',
      groupId : '',
      flagCode : ''
    };
    $scope.addCountry = function function_name(country) {
      countries.add(country).then(function (data) {
        $scope.countries.unshift(data);
      });
    }
  });
