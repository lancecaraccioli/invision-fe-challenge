'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngSanitize',
  'ui.router',
  'taiPlaceholder',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.user',
  'myApp.composer',
  'myApp.navigation',
  'myApp.post'
]).
  run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    //for easy ui state checks (active navigation item for example)
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]).
  config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('landing', {
      url: '/'
    });
  }]).
  controller('AppCtrl', ['authentication', '$mdDialog', function(authentication, $mdDialog) {
    this.authenticatedUser = authentication.user;

    /**
     * TODO migrate once compose-button directive is created
     */
    this.showComposerDialog = function () {
      var alert = $mdDialog.alert({
        title: 'Attention',
        content: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });
      $mdDialog
        .show(alert)
        .finally(function () {
          alert = undefined;
        });
    };
  }]);
