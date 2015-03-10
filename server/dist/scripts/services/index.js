'use strict';

angular.module('artistApp')

  /**
  * Menu Factory
  * Provides the common menu items used in the mobile menu and tablet/desktop menu.
  */
	.factory('menuFactory', [function() {
			var factory = {};
			
			factory.menu = [
        {
          title: 'home',
          link:  '',
          fa:    'home'
        },
        {
          title: 'music',
          link:  'music',
          fa:    'music'
        },
        {
          title: 'videos',
          link:  'videos',
          fa:    'video-camera'
        },
        {
          title: 'pictures',
          link:  'pictures',
          fa:    'camera'
        },
        {
          title: 'biography',
          link:  'bio',
          fa:    'smile-o'
        },
        {
          title: 'tour-dates',
          link:  'tour-dates',
          fa:    'calendar'
        },
        {
          title: 'contact',
          link:  'contact',
          fa:    'info'
        }
      ];

      factory.socialMenu = [
        {
          mobile_title: 't',
          title:        'twitter',
          link:         'https://twitter.com/kevinfdev',
          css_id:       'twit',
          fa:           'twitter'
        },
        {
          mobile_title: 'f',
          title:        'facebook',
          link:         'https://www.facebook.com/profile.php?id=100007602016125',
          css_id:       'face',
          fa:           'facebook'
        },
        {
          mobile_title: 'i',
          title:        'instagram',
          link:         'https://instagram.com/joerogan/',
          css_id:       'insta',
          fa:           'instagram'
        }
      ];

		  return factory;	
		}])

  /**
  * Album Factory
  * Provides the active album data
  */
  .factory('albumFactory', ['$http', function($http) {

    return {
      albumDataPromise:  function(){},
      getAlbumsJson: function() {
        return $http.get('../../data/albums.json');
      }
    }

  }])

    /**
  * Video Factory
  * Provides the videos 
  */
  .factory('videosFactory', ['$http', function($http) {

    return {
      getVideoData: function() {
        return $http.get('../../data/videos.json');
      }

    }

  }])

  /**
  * Pictures Factory
  * Provides the pictures 
  */
  .factory('picturesFactory', ['$http', function($http) {

    return {
      getPicturesData: function() {
        return $http.get('../../data/pictures.json');
      }

    }

  }]);

