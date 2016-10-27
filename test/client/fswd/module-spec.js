// import angular from 'angular';
// import from '../../../public/fswd';

import 'angular';
import 'angular-mocks';

describe('fswd', function() {
  beforeEach(function() {
    angular.module('fswd', []);
    angular.mock.module('fswd');
  });
  it('should exist', function() {
    angular.module('fswd').should.be.ok;
  })
});
