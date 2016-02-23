
var app=angular.module("config", ["ngRoute"]);

app.config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "/views/users/home.view.html"
                })
                .when("/register", {
                    templateUrl: "/views/users/register.view.html",
                    controller:"RegisterController"
                })
                .when("/login", {
                    templateUrl: "/views/users/login.view.html"
                })
                .when("/profile", {
                    templateUrl: "/assignment/views/users/profile.view.html",
                    controller:"ProfileController"
                })
                .when("/admin", {
                    templateUrl: "/views/users/admin.view.html"
                })

                .otherwise({
                    redirectTo: "/views/users/home.view.html"
                });
        });