'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('ContactCtrl', 
  	['$scope', 'menuFactory',
  	function ($scope, menuFactory) {
	    $scope.socialMenu = menuFactory.socialMenu;
  }]);
