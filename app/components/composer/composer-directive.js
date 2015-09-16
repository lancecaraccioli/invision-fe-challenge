'use strict';

angular.module('myApp.user.user-menu-directive', [])

.directive('userMenu', ['authentication', function() {
  return {
    restrict: 'EA',
    templateUrl: 'components/user/user-menu-directive.html',
    replace: true,
    controllerAs: 'userMenu',
    scope: {
      user: '=user'
    },
    link: function (scope, element, attrs) {

      element.on('click', function () {
        element.toggleClass('open');
      });
      scope.$on('$destroy', function () {
        element.off('click');
      });
    },
    controller: function ($scope) {
      this.user = $scope.user;
    }
  };
}]);
