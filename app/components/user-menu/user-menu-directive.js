'use strict';

angular.module('myApp.user-menu.user-menu-directive', [])

.directive('appUserMenu', ['userMenu', function(userMenu) {
  return {
    restrict: 'EA',
    templateUrl: 'app/components/user-menu/user-menu-directive.html',
    replace: true,
    controllerAs: 'userMenu',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        element.toggleClass('open');
      });
      scope.on('$destroy', function () {
        element.off('click');
      });
    },
    controller: function () {

    }
  };
}]);
