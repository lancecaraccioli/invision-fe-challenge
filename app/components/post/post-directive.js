'use strict';

angular.module('myApp.post.post-directive', [])

.directive('post', ['$log', function($log) {
  return {
    restrict: 'EA',
    templateUrl: 'components/post/post-directive.html',
    replace: true,
    controllerAs: 'post',

    link: function (scope, element, attrs) {

    },
    controller: function () {

    }
  };
}]);
