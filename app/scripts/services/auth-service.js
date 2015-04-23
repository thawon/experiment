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

        function test() {
            return $http.post("test/")
                .then(function (res) {
                    var data = res.data;

                    return data;
                });
        };
    }

}());