'use strict';

angular.module('myApp.user-menu.user-menu-service', [])

.factory('userMenu', function(userMenu) {
  return {
    getUser: function () {
      return {
        name: 'Jill Doe',
        avatarUrl: 'app/img/avatars/jill-doe.jpg'
      }
    },
    getSettings: function () {
      
    }
  };
});
