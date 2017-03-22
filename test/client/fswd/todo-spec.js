var angular = require('angular');
require('angular-mocks');
require('/public/fswd/todo');

describe('fswd.todo', function() {
  beforeEach(angular.mock.module('fswd.todo'));

  it('should exist', function() {
    angular.module('fswd.todo').should.be.ok;
  });
});
