(function () {
    'use strict';
    angular
        .module("GrabACar")
        .controller("DetailsController", DetailsController);
    function DetailsController($rootScope,$scope) {
        $scope.instance=$rootScope.instance;
    }
})();
