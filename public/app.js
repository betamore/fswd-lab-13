var $ = require('jquery');
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
require('bootstrap/css/bootstrap-theme.css!');
var angular = require('angular');

require('fswd');

// Make jquery available in the console
window.$ = $;

$('body').show();

angular.element(document).ready(function() {
  angular.bootstrap(angular.element(document), ['fswd']);
});
