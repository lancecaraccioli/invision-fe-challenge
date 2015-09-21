'use strict';

angular.module('myApp.composer.composer-directive', [])

.directive('composer', ['$log', function($log) {
  return {
    restrict: 'EA',
    templateUrl: 'components/composer/composer-directive.html',
    replace: true,
    controllerAs: 'composer',
    scope: {
      title: '=title',
      placeholder: '=hint',
      includePostButton: '=includePostButton'
    },
    link: function (scope, element, attrs) {

    },
    controller: function ($scope) {
      this.placeholder = $scope.placeholder;
      this.title = $scope.title;
      this.includePostButton = $scope.includePostButton;
      this.addPhoto = function () {
        $log.log('implement add photo');
      };
      this.addVideo = function () {
        $log.log('implement add video');
      };
      this.submitPost = function () {
        $log.log('implement submit post');
      };
    }
  };
}]);
