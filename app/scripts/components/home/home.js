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