

var app = angular.module('myapp', []);


       app.directive('ffMenu', function() {
          return {
              restrict: 'E',
              templateUrl: '../common/js/modules/partials/menu.tpl.html',
              controller: ['$scope',function($scope){


                  $scope.menuItems = [{"id":"home","class":"active","title":"Home"},
                                   {"id":"profile","class":"profile","title":"Profile"},
                                   {"id":"admin","class":"admin","title":"Admin"},
                                   {"id":"forms","class":"forms","title":"Forms"}];


                }],
            };
   });