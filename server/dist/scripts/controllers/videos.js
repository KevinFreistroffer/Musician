'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('VideosCtrl', 
  	['$scope', '$sce', 'videosFactory',
  	function ($scope, $sce, videosFactory) {
    	$scope.getVideos = videosFactory.getVideoData;
    	$scope.getVideos()
    		.success(function(data) {
          console.log(data);
          $scope.videos = data;
        });  		

        $scope.safeYoutubeEmbed = function(embed) {
           return $sce.trustAsHtml(embed);
        };

      
  }]);
