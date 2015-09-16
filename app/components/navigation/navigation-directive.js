'use strict';

angular.module('myApp.navigation.navigation-directive', [])

.directive('navigation', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'components/navigation/navigation-directive.html',
    replace: true,
    controllerAs: 'navigation'
    /*
    link: function (scope, element, attrs) {},
    controller: function ($scope) {}*/
  };
}]);
