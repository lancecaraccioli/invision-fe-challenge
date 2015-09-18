'use strict';

angular.module('myApp.post.post-item-directive', [])

.directive('postItem', ['$log', function($log) {
  return {
    restrict: 'E',
    templateUrl: 'components/post/post-item-directive.html',
    replace: true,
    controllerAs: 'postItem',
    scope: {
      post: '=post'
    },
    link: function (scope, element, attrs) {

    },
    controller: function ($scope) {
      this.post = $scope.post;
    }
  };
}]);
