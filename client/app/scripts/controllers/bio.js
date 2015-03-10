'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BioCtrl
 * @description
 * # BioCtrl
 * Controller of the clientApp
 */
angular.module('artistApp')
  .controller('BioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
