'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('artistApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .run(function($rootScope) {
    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 27)
            $rootScope.$broadcast("escapePressed", false);
    });

    // document.addEventListener("click", function(e) {
    //     $rootScope.$broadcast("documentClicked", e.target);
    // });
  })

  // [TODO] wrap in []. Check if it works.  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'BioCtrl'
      })
      .when('/tour-dates', {
        templateUrl: 'views/tour-dates.html',
        controller: 'TourDatesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/album/:title', {
        templateUrl: 'views/album_template.html',
        controller: 'AlbumCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });