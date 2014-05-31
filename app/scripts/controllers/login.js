'use strict';

angular.module('predictwcApp')
  .controller('LoginCtrl', function ($scope) {

      $scope.loggedInUser = {"username":"joar@test.com","createdOn":"2014-05-24T11:41:02.319Z","role":"user","id":"6fa63096702fda33"};
      // dpd.users.me(function(me) {
      //   $scope.loggedInUser = me;
      //   console.log(me);
      // });
      $scope.createUser = function (email, password) {
        dpd.users.post({"username": email, "password": password}, function(user, err) {
          if(err) { return console.log(err); }
          console.log(user);
        });
      }
      $scope.loginUser = function (email, password) {
        dpd.users.login({"username": email, "password": password }, function(user, err) {
          if(err) { return console.log(err); } 
          console.log(user);
          $scope.loggedInUser = user;
        });
      };
  });
