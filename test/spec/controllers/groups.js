'use strict';

describe('Controller: GroupsCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var GroupsCtrl,
    groups,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupsCtrl = $controller('GroupsCtrl', {
      $scope: scope,
      groups: groups
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
