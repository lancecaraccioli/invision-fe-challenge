'use strict';

angular.module('myApp.settings', ['ui.router'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('settings.index', {
      url: '/',
      templateUrl: 'settings/settings.html',
      controller: 'SettingsCtrl as settings'
    });
  }])

  .controller('SettingsCtrl', [function() {

  }]);
