'use strict';

describe('Controller: WinnersCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var WinnersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WinnersCtrl = $controller('WinnersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
