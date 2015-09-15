'use strict';

describe('myApp.posts module', function() {

  beforeEach(module('myApp.posts'));

  describe('posts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var postsCtrl = $controller('PostsCtrl');
      expect(postsCtrl).toBeDefined();
    }));

  });
});
