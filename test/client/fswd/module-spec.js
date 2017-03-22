var angular = require('angular');
require('angular-mocks');
require('/public/fswd');

describe('fswd', function() {
  beforeEach(function() {
    angular.mock.module('fswd');
  });
  it('should exist', function() {
    angular.module('fswd').should.be.ok;
  })
});
