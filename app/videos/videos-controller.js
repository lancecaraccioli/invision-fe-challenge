'use strict';

angular.module('myApp.videos', ['ui.router'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('videos', {
      url: '/videos',
      templateUrl: 'videos/videos.html',
      controller: 'VideosCtrl as videos',
      resolve: {
        posts: function(post) {
          return post.getVideoPosts();
        }
      }
    });
  }])

  .controller('VideosCtrl', [function(posts) {
    this.posts = posts;
  }]);
