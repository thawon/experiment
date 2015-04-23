(function () {
    "use strict";

    angular.module("app", [
        "ngNewRouter",
        "app.home",
        "app.page"
    ])
    .config(["$locationProvider", "$componentLoaderProvider", function ($locationProvider, $componentLoaderProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });

        $componentLoaderProvider.setTemplateMapping(function (name) {            
            var dashName = dashCase(name);            
            return "./scripts/components/" + dashName + "/" + dashName + ".html";
        });
    } ])
    .controller("AppController", AppController);

    AppController.$inject = ["$router"];

    function AppController($router) {
        $router.config([
			{ path: "/", component: "home" },
            { path: "/page", component: "page" }
        ]);
    }

} ());