'use strict';

describe('Controller: AlignourselvesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AlignourselvesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlignourselvesCtrl = $controller('AlignourselvesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
