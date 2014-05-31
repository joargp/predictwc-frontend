'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach more than three countries to scope', function () {
    expect(scope.countries.length > 3).toBe(true);
  });
});
