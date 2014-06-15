'use strict';

describe('Service: bets', function () {

  // load the service's module
  beforeEach(module('predictwcApp'));

  // instantiate service
  var bets;
  beforeEach(inject(function (_bets_) {
    bets = _bets_;
  }));

  it('should do something', function () {
    expect(!!bets).toBe(true);
  });

});
