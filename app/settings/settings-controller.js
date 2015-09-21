'use strict';

angular.module('myApp.settings', ['ui.router', 'myApp.user'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('settings.index', {
      url: '/',
      templateUrl: 'settings/settings.html',
      controller: 'SettingsCtrl as settings'
    });
  }])

  .controller('SettingsCtrl', ['authentication', '$log', function(authentication, $log) {
    this.user = angular.copy(authentication.user);
    this.settings = angular.copy(authentication.settings);
    this.save = function updateUserSettings() {
      angular.merge(authentication.user, this.user);
      angular.merge(authentication.settings, this.settings);
    };
    this.changeAvatar = function ($event) {
      $event.preventDefault();
      $log.log('implement changeAvatar');
    };
  }]);
