(function () {
    "use strict";

    angular.module("app", [
        "ui.router",
        "app.home",
        "app.page"
    ])
    .config(["$locationProvider", "$stateProvider", "$urlRouterProvider",
    function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "scripts/components/home/home.html",
                controller: "HomeController as home"
            })
            $stateProvider
            .state('page', {
                url: "/page",
                templateUrl: "scripts/components/page/page.html",
                controller: "PageController"
            })

    }])
    .controller("AppController", AppController);


    function AppController() {
    }

} ());