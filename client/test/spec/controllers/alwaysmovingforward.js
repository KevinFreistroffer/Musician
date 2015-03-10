'use strict';

describe('Controller: AlwaysmovingforwardCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AlwaysmovingforwardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlwaysmovingforwardCtrl = $controller('AlwaysmovingforwardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
