'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PicturesCtrl
 * @description
 * # PicturesCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('PicturesCtrl', 
  	['$scope', 'picturesFactory',
  	function ($scope, picturesFactory) {
    	$scope.getPicturesData = picturesFactory.getPicturesData;
      $scope.activeImageObj = {};

    	$scope.getPicturesData()
    		.success(function(data) {
    			console.log('Success getting pictures data from JSON');
    			$scope.pictures = data;

          // [TODO] conditionally call this fn because maybe the pictures didn't load.
          $scope.activeImage(0);
    		})
    		.error(function(reason) {
    			console.log('Error getting pictures data from JSON');
    		});

        $scope.activeImage = function(i) {
          $scope.activeImageObj = $scope.pictures[i];
          $scope.display = $scope.pictures[i].src;
        };
  }]);
