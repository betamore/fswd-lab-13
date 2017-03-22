var angular = require('angular');
require('angular-mocks');
require('/public/fswd/todo');

describe('fswd.todo.TodoListController', function() {
  beforeEach(angular.mock.module('fswd.todo'));

  it('should work for a task', inject(function($compile, $rootScope) {
    var $scope = $rootScope.$new();
    $scope.myTask = { id: 15, name: 'Something!' };
    var element = $compile('<fswd-task task="myTask"></fswd-task>')($scope);

    $rootScope.$digest();
    element.find('a').attr('href').should.equal('#/tasks/15');
  }));
});
