'use strict';

describe('Controller: MatchesCtrl', function () {

  // load the controller's module
  beforeEach(module('predictwcApp'));

  var MatchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchesCtrl = $controller('MatchesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
