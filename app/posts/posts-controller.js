'use strict';

angular.module('myApp.posts', ['ui.router', 'myApp.post.post-service'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('posts.index', {
      url: '/',
      templateUrl: 'posts/posts.html',
      controller: 'PostsCtrl as posts',
      resolve: {
        posts: function(post) {
          return post.getPosts();
        }
      }
    });
  }])

  .controller('PostsCtrl', ['posts', function(posts) {
    this.posts = posts;
  }]);
