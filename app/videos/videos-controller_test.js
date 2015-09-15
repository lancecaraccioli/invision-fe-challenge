'use strict';

describe('myApp.videos module', function() {

  beforeEach(module('myApp.videos'));

  describe('videos controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var videosCtrl = $controller('VideosCtrl');
      expect(videosCtrl).toBeDefined();
    }));

  });
});
