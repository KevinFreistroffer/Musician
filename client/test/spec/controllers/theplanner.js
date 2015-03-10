'use strict';

describe('Controller: TheplannerCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TheplannerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheplannerCtrl = $controller('TheplannerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
