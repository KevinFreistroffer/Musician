'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('AlbumCtrl', 
  	['$scope', '$http', '$location', 'albumFactory',
  	function ($scope, $http, $location, albumFactory) {

      $scope.currentAlbum = 0;

      $scope.setCurrentAlbum = function(id) {
        $scope.currentAlbum = id;
      };

  		$scope.getAlbumData = function() {
  			var url = $location.path();
  			var parts = url.split('/');
  			var title = parts[parts.length-1];


  			$http
  				.get('album/' + title)
  					.success(function(data) {
  						console.log('Success:: data: ' + data);
  						$scope.albumData = data[0];
              $scope.tracks = $scope.albumData.tracks;
  					})
  					.error(function(reason) {
  						console.log('Error reason: ' + reason);
  					});
  		};

  		$scope.getAlbumData();
     
    	// Retrieves album names via JSON. DELETE/REdo this to get data from database.
	    $scope.getAlbumsJson = albumFactory.getAlbumsJson();

	    $scope.getAlbumsJson.success(function(data) {
	    	$scope.albums = data;
	    });

  }]);
