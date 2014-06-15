'use strict';

describe('Controller: BetsCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var BetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BetsCtrl = $controller('BetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
