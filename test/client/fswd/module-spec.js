// import angular from 'angular';
// import from '../../../public/fswd';

import 'angular';
import 'angular-mocks';
import '/public/fswd';

describe('fswd', function() {
  beforeEach(function() {
    angular.mock.module('fswd');
  });
  it('should exist', function() {
    angular.module('fswd').should.be.ok;
  })
});
