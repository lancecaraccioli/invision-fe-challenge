'use strict';

describe('myApp.photos module', function() {

  beforeEach(module('myApp.photos'));

  describe('photos controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var photosCtrl = $controller('PhotosCtrl');
      expect(photosCtrl).toBeDefined();
    }));

  });
});
