'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('MusicCtrl', 
  	['$scope', '$http', '$q', '$location', '$routeParams', 'albumFactory', '$rootScope',
  	function ($scope, $http, $q, $location, $routeParams, albumFactory, $rootScope) {
			
			$scope.activeAlbum = null;

			// sets the current clicked on album link.
    	$scope.isActiveAlbum = function(i) {
    		$scope.activeAlbum = i;
 	   	};

 	
 	   	// *** Not using these below eventually will be getting data from database. Member to delete these 

    	// Retrieves album names via JSON. DELETE/REdo this to get data from database.
	    $scope.getAlbumsJson = albumFactory.getAlbumsJson();

	    $scope.getAlbumsJson.success(function(data) {
	    	$scope.albums = data;
	    });
  }]);
