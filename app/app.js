'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.user'
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
