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
            return "/scripts/components/" + dashName + "/" + dashName + ".html";
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
(function () {

    "use strict";

    angular.module("app.home", [
        "app.authService"
    ])
    .controller("HomeController", HomeController);

    HomeController.$inject = ["AuthService"];

    function HomeController(AuthService) {
        this.name = "Friend";

        AuthService.test()
            .then($.proxy(function (data) {
                this.test = data.field;
            },this));
    }

} ());
(function () {
    "use strict";

    angular.module("app.page", [])
      .controller("PageController", [Page1Controller]);

    function Page1Controller() {
          this.name = "page";
      } 
} ());
(function () {
    "use strict";

    angular.module("app.authService", [])
        .factory("AuthService", AuthService);

    AuthService.$inject = ["$http"];

    function AuthService($http) {
        var authService = {
            test: test
        };

        return authService;

        function test(credentials) {
            return $http.post("/test")
                .then(function (res) {
                    var data = res.data;

                    return data;
                });
        };
    }

}());