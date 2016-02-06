var app = angular.module('myapp', []);

app.directive('ffMenu', function() {
  return {
      restrict: 'E',
      templateUrl: '../common/js/modules/partials/menu.tpl.html'
   };
});