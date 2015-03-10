'use strict';

describe('Controller: WhataboutyouCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var WhataboutyouCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhataboutyouCtrl = $controller('WhataboutyouCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
