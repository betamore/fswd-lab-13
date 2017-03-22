var angular = require('angular');
require('angular-mocks');
require('/public/fswd/todo');

describe('fswd.todo.TodoListService', function() {
  beforeEach(angular.mock.module('fswd.todo'));

  afterEach(inject(function($httpBackend) {
    // $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should retrieve a given task id', inject(function($httpBackend, TodoListService) {
    $httpBackend.expectGET('/tasks/14').respond(200, { id: 14, name: 'Tests!'});

    var promise = TodoListService.retrieveTodo(14)
      .then(function(task) {
        task.should.deep.equal({ id: 14, name: 'Tests!'});
      });

    $httpBackend.flush();
    return promise;
  }));

  it('should add a new task', inject(function($httpBackend, TodoListService) {
    $httpBackend.expectPOST('/tasks', { todo: 'beer' })
      .respond(200, [ { id: 2, name: 'other task'}, { id: 3, name: 'beer '}]);

      TodoListService.addTodo('beer');
      $httpBackend.flush();

      TodoListService.getTodoList().should.deep.equal([
        { id: 2, name: 'other task'}, { id: 3, name: 'beer '}
      ]);

  }));
});
