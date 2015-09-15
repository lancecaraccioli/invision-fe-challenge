'use strict';

angular.module('myApp.videos', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('videos', {
    url: '/videos',
    templateUrl: 'videos/videos.html',
    controller: 'VideosCtrl as videos'
  });
}])

.controller('VideosCtrl', [function() {
  this.videos = [
    'Shaw Shank',
    'FOrest Gump',
    'Star Wars'
  ];
}]);
