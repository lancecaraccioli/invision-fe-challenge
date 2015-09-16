'use strict';

angular.module('myApp.composer.composer-directive', [])

.directive('composer', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'components/composer/composer-directive.html',
    replace: true,
    controllerAs: 'composer',

    link: function (scope, element, attrs) {

    },
    controller: function ($scope) {
      this.placeholder = 'What\'s on your mind?';
    }
  };
}]);
