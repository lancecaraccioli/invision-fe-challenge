'use strict';

angular.module('myApp.photos', ['ui.router', 'myApp.post'])

.config(['$stateProvider', function($stateProvider, post) {
  $stateProvider.state('photos', {
    url: '/photos',
    templateUrl: 'photos/photos.html',
    controller: 'PhotosCtrl as photos',
    resolve: {
      posts: function () {
        return post.getPhotoPosts();
      }
    }
  });
}])

.controller('PhotosCtrl', [function(posts) {
  this.photos = posts;
}]);
