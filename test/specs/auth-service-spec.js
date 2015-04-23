"use strict";

describe("Unit: AuthService", function () {

    var service, $httpBackend;

    beforeEach(module("app.authService"));

    beforeEach(inject(function (AuthService, _$httpBackend_) {
        service = AuthService;

        $httpBackend = _$httpBackend_;
    }));

    it("test backend mock",
    function () {
        var url = "/test";

        $httpBackend.when("POST", url)
            .respond({ field: "mock server" });               

        service.test();

        $httpBackend.flush();

        $httpBackend.expectPOST(url);

        //expect(service.test).toHaveBeenCalled();
    });
});
