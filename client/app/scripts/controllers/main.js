'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('MainCtrl', 
  	['$scope', 'menuFactory',
  	function ($scope, menuFactory) {
  		$scope.menuContent = menuFactory.menu;
  }]);
