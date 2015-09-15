'use strict';

angular.module('myApp.posts', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('posts', {
    url: '/posts',
    templateUrl: 'posts/posts.html',
    controller: 'PostsCtrl as posts'
  });
}])

.controller('PostsCtrl', [function() {
  this.posts = [
    'Jim',
    'Jain',
    'Jill'
  ];
}]);
