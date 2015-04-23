"use strict";

describe("Controller: HomeController", function () {

    // load the controller"s module
    beforeEach(module("app.home"));

    var HomeController,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        HomeController = $controller("HomeController");
    }));

    it("test", function () {
        expect(HomeController.name).toBe("Friend");
    });
});
