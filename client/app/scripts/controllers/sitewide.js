'use strict';

angular.module('artistApp')
	.controller('SiteWideCtrl', 
		['$scope', '$rootScope', '$interval', '$location', 'menuFactory',
		function($scope, $rootScope, $interval, $location, $menuFactory) {
			$scope.showMenu   = false;
			$scope.isMainView = true;
			$scope.currView   = 'home';

			$scope.$on('$locationChangeStart', function(event) {
				$scope.loading = true;
				// auto closes the menu on any route change
				$scope.showMenu = false;

				if ($location.path() === '/') {
					$scope.isMainView = true;
					$scope.currView   = $location.path();

				} else {
					$scope.isMainView = false;
					$scope.currView   = $location.path();					
				}
			});

			$scope.$on('$locationChangeSuccess', function(event) {
				$scope.loading = false;
			});

			$scope.$on('toggleMenuEmit', function(event, data) {
			  $scope.showMenu = !$scope.showMenu;
		  	});

			$scope.toggleMenu = function() {
				$scope.showMenu = !$scope.showMenu;
			};

			$scope.closeMenu = function() {
				$scope.showMenu = false;
			};

			$rootScope.$on('escapePressed', close);
			// $rootScope.$on('documentClicked', close);

			$rootScope.$on('$routeChangeStart', function(event, next, current) {
				$scope.routeChangeStartStatus = "Loading";
			});

			// TODO: LEARN
			function close() {
				$scope.$apply(function() {
					$scope.showMenu = false;	
				});
			}
		}]);