'use strict';

angular.module('artistApp')
  .controller('mobileMenuCtrl', 
    ['$scope', 'menuFactory',
    function($scope, menuFactory) {

      // Header Menu Items
      $scope.menuContent = menuFactory.menu;
      $scope.socialMenu  = menuFactory.socialMenu;
    }]);