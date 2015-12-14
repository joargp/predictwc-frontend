'use strict';

describe('Service: isLoading', function () {

  // load the service's module
  beforeEach(module('predictwcApp'));

  // instantiate service
  var isLoading;
  beforeEach(inject(function (_isLoading_) {
    isLoading = _isLoading_;
  }));

  it('loading status should default to false', function () {
    expect(isLoading.status()).toBe(false);
  });

  it('setting status correctly changes internal setting and status() returns new status', function () {
    isLoading.set(true);
    expect(isLoading.status()).toBe(true);
  });

});
