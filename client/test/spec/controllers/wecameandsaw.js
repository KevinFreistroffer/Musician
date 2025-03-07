'use strict';

describe('Controller: WecameandsawCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var WecameandsawCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WecameandsawCtrl = $controller('WecameandsawCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
