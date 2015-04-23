'use strict';

describe("authentication", function () {
    var ptor;

    var mock_code = function () {
        angular.module('httpBackendMock', ['ngMockE2E', 'app.home'])
            .run(function ($httpBackend) {
                $httpBackend.whenPOST(/test/).respond(200, { field: 'Yeah YEah Yeah' });

                $httpBackend.whenGET("scripts/components/home/home.html").passThrough();

                $httpBackend.expectGET("scripts/components/home/home.html")
                //$httpBackend.expectGET(/test/);
            });
    };

    beforeEach(function () {
        
    });

    it('should override services via mock modules', function () {        
                
        browser.addMockModule('httpBackendMock', mock_code);
        
        browser.get('/');
                
        browser.sleep(30000);
        
    });

});