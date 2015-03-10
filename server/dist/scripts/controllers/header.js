'use strict';

angular.module('artistApp')
  .controller('HeaderCtrl', 
    ['$scope', '$location', 'menuFactory',
    function($scope, $location, menuFactory) {

      $scope.currMenu = null;

      $scope.findCurrMenu = function(i) {
        $scope.currMenu = i;
      };
      // Header Menu Items
      $scope.menuContent = menuFactory.menu;
      $scope.socialMenu  = menuFactory.socialMenu;

      $scope.$on('routeChangeStart', function(event) {
        console.log($location.path());
      });

      /* if the current route if its equal to menu.somevalue than add class. */
    }]);