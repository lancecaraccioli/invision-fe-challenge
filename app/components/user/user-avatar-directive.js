'use strict';

angular.module('myApp.user.user-avatar-directive', [])

.directive('userAvatar', ['authentication', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/user/user-avatar-directive.html',
    replace: true,
    controllerAs: 'userAvatar',
    scope: {
      user: '=user',
      size: '=size'
    },
    controller: function ($scope, $element) {
      this.user = $scope.user;
      if ($scope.size) {
        $element.addClass($scope.size);
      }
    }
  };
}]);
