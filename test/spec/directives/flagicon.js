'use strict';

describe('Directive: flagIcon', function () {

  // load the directive's module
  beforeEach(module('predictwcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flag-icon></flag-icon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flagIcon directive');
  }));
});
