'use strict';

angular.module('myApp.photos', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('photos', {
    url: '/photos',
    templateUrl: 'photos/photos.html',
    controller: 'PhotosCtrl as photos'
  });
}])

.controller('PhotosCtrl', [function() {
  this.photos = [
    'woot',
    'foo',
    'bar'
  ];
}]);
