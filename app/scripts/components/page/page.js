(function () {
    "use strict";

    angular.module("app.page", [])
      .controller("PageController", [Page1Controller]);

    function Page1Controller() {
          this.name = "page";
      } 
} ());