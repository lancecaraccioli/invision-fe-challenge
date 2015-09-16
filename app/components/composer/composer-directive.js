'use strict';

angular.module('myApp.composer.composer-directive', [])

.directive('composer', ['$log', function($log) {
  return {
    restrict: 'EA',
    templateUrl: 'components/composer/composer-directive.html',
    replace: true,
    controllerAs: 'composer',

    link: function (scope, element, attrs) {

    },
    controller: function ($scope) {
      this.placeholder = 'What\'s on your mind?';
      this.addPhoto = function () {
        $log.log('implement add photo');
      };
      this.addVideo = function () {
        $log.log('implement add video');
      };
    }
  };
}]);
