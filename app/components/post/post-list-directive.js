'use strict';

angular.module('myApp.post.post-list-directive', [])

.directive('postList', ['$log', function($log) {
  return {
    restrict: 'E',
    templateUrl: 'components/post/post-list-directive.html',
    replace: true,
    controllerAs: 'postList',
    scope: {
      posts: '=posts'
    },

    link: function (scope, element, attrs) {

    },
    controller: function ($scope) {
      this.posts = $scope.posts;
    }
  };
}]);
