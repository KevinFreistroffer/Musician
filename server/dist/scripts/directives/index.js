'use strict';

angular.module('artistApp')

	/**
	* Auto closes mobile menu if window resizes pas 768px
	*/
	.directive('autoCloseMenu', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				angular.element('window')
					.bind('resize', function() {
						console.log('resizing');
					});
			}
		}
	});