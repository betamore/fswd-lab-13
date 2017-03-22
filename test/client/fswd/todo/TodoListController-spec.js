var angular = require('angular');
require('angular-mocks');
require('/public/fswd/todo');

describe('fswd.todo.TodoListController', function() {
  beforeEach(angular.mock.module('fswd.todo'));

  it('should add a todo', inject(function($controller, $rootScope, TodoListService) {
    sinon.spy(TodoListService, 'addTodo');
    var ctrl = $controller('TodoListController', {
      $scope: $rootScope.$new(),
      TodoListService: TodoListService
    });
    ctrl.addTodo('Something!');
    TodoListService.addTodo.should.have.been.calledOnce;
    TodoListService.addTodo.calledWith('Something!').should.be.true;
  }));
});
