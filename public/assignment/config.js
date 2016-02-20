
(function(){
    angular
        .module("config", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "/views/users/home.view.html"
                })
                .when("/register", {
                    templateUrl: "/views/users/register.view.html"
                })
                .when("/login", {
                    templateUrl: "/views/users/login.view.html"
                })
                .when("/profile", {
                    templateUrl: "/views/users/profile.view.html"
                })
                .when("/admin", {
                    templateUrl: "/views/users/admin.view.html"
                })

                .otherwise({
                    redirectTo: "/views/users/home.view.html"
                });
        });
})();
