'use strict';

describe('Service: matches', function () {

  // load the service's module
  beforeEach(module('predictwcApp'));

  // instantiate service
  var matches;
  beforeEach(inject(function (_matches_) {
    matches = _matches_;
  }));

  it('should do something', function () {
    expect(!!matches).toBe(true);
  });

});
