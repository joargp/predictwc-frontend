'use strict';

describe('Service: dpd', function () {

  // load the service's module
  beforeEach(module('predictwcApp'));

  // instantiate service
  var dpd;
  beforeEach(inject(function (_dpd_) {
    dpd = _dpd_;
  }));

  it('should do something', function () {
    expect(!!dpd).toBe(true);
  });

});
