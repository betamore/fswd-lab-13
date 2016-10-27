// import angular from 'angular';
// import 'angular-mocks';
// import from '../../../public/fswd';

import 'angular';
import 'angular-mocks';
import '/public/fswd/todo';

describe('fswd.todo.TodoListService', function() {
  beforeEach(angular.mock.module('fswd.todo'));

  afterEach(inject(function($httpBackend) {
    $httpBackend.flush();
  }));

  it('should retrieve a given task id', inject(function($httpBackend, TodoListService) {
    $httpBackend.expectGET('/tasks/14').respond(200, { id: 14, name: 'Tests!'});

    return TodoListService.retrieveTodo(14)
      .then(function(task) {
        task.should.deep.equal({ id: 14, name: 'Tests!'});
      });
  }));
});
