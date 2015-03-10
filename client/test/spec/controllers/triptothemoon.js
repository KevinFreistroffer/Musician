'use strict';

describe('Controller: TriptothemoonCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TriptothemoonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TriptothemoonCtrl = $controller('TriptothemoonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
