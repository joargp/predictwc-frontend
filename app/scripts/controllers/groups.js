'use strict';

angular.module('predictwcApp')
  .controller('GroupsCtrl', function ($scope, groups) {
    groups.getAll().then(function (data) {
      $scope.groups = data;
    });
  });
