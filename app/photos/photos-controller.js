'use strict';

angular.module('myApp.photos', ['ui.router', 'myApp.post.post-service'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('photos', {
      url: '/photos',
      templateUrl: 'photos/photos.html',
      controller: 'PhotosCtrl as photos',
      resolve: {
        posts: function(post) {

          return post.getPhotoPosts();
        }
      }
    });
  }])

  .controller('PhotosCtrl', ['posts', function(posts) {
    this.posts = posts;
  }]);
