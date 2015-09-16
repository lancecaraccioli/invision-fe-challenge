'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'taiPlaceholder',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.user',
  'myApp.composer',
  'myApp.navigation'
]).
  config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('landing', {
      url: '/'
    });
  }]).
  controller('AppCtrl', ['authentication', function(authentication) {
    this.authenticatedUser = authentication.user;////
  }]);
