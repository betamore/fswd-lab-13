var angular = require('angular');
require('./fswd/todo');
require('./fswd/registration');

angular.module('fswd', ['fswd.todo', 'fswd.registration']);
