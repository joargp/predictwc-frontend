'use strict';

describe('Controller: CountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var CountriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountriesCtrl = $controller('CountriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
