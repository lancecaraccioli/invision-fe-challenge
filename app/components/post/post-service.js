'use strict';

angular.module('myApp.post.post-service', ['myApp.user.user-service'])

  .factory('post', function(user) {
    var posts = _buildMockPosts();
    return {
      getPosts: function() {
        return posts;
      },
      getPhotoPosts: function() {
        var photoPosts = [];
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].attachment && posts[i].attachment.type === 'photo') {
            photoPosts.push(posts[i]);
          }
        }
        return photoPosts;
      },
      getVideoPosts: function() {
        var videoPosts = [];
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].attachment && posts[i].attachment.type === 'photo') {
            videoPosts.push(posts[i]);
          }
        }
        return videoPosts;
      }
      /*,
      addPost: function(post) {
        posts.push(post);
      }*/
    };

    function _buildMockPosts() {
      var posts = [
        {
          userId: 15,
          message: 'How to Get Inspired: the Right Way - Designmodo [bit.ly/1IE4uJc] \nGood Stuff from [@designmodo]!'
        },
        {
          userId: 10,
          message: 'My view this morning is simply beautiful... \n[instagram.com/p/mVOPUrHRwQ/]',
          attachment: {
            type: 'photo',
            url: ''
          }
        },
        {
          userId: 7,
          message: '8 Apps to Turn Your Pipe Dreams Into Prototypes \n[on.mash.to/1oubyu8]'
        },
        {
          userId: 9,
          message: 'How to get animations out of your head. [http://bit.ly/1q7BngO] \nFunny and useful.'
        },
        {
          userId: 17,
          message: 'You have to see this bike. It will make your daily commute an absolute joy ride! [vimeo.com/p/mVOPUrHRwQ/]',
          attachment: {
            type: 'video',
            url: ''
          }
        },
        {
          userId: 12,
          message: 'Need some reading? 11 free ebooks for designers | Creative Bloq [bit.ly/1IE5QDM] via [@netmag]'
        },
        {
          userId: 4,
          message: 'Perfect day to be outside taking pictures \n[instagram.com/p/mVOPUrHRwQ/]',
          attachment: {
            type: 'photo',
            url: ''
          }
        },
        {
          userId: 5,
          message: 'Thoughtful brand decisions vs. emotional brand decisions. \n[ow.ly/vtT2i]'
        },
        {
          userId: 6,
          message: 'Had some time to play with interactive portion of inDesignCC [bit.ly/1IE5QD]'
        },
        {
          userId: 11,
          message: 'Awesome! Check this out. [instagram.com/p/mVOPUrHRwQ/]',
          attachment: {
            type: 'video',
            url: ''
          }
        },
        {
          userId: 2,
          message: '[#freelancers] will enjoy [@WDTrends] for graphic and web design tips and inspiration.'
        },
        {
          userId: 3,
          message: 'Sponsor // Bootstrap Responsive Templates bit.ly/1qfjLOI [#design]'
        },
        {
          userId: 8,
          message: '7 Servings of Type for a Healthy Head & Body'
        },
        {
          userId: 1,
          message: 'Road trip! [bit.ly/1hkXFdK]',
          attachment: {
            type: 'photo',
            url: ''
          }
        },
        {
          userId: 16,
          message: 'Deal with your problems before they deal with your happiness.'
        },
        {
          userId: 13,
          message: 'Excited about [@99U] Conf lineup this year [conference.99u.com]'
        },
        {
          userId: 14,
          message: 'Love this picture [instagram.com/p/mVOPUrHRwQ/]',
          attachment: {
            type: 'photo',
            url: ''
          }
        }
      ];

      var _assetPath = '/img/post-assets/';
      var linkReg = /\[([^\]]*)]/g;
      var replacer = function(match, p1) {
        return '<a href>' + p1 + '</a>';
      };
      for (var i = 0; i < posts.length; i++) {
        posts[i].user = user.getUser(posts[i].userId);
        if (posts[i].attachment) {
          posts[i].attachment = _assetPath + posts[i].userId + '.jpg';
        }
        //replace newlines with <br /> tags
        posts[i].messageHtml = posts[i].message.replace('\n', '<br />');
        //parse psuedo markdown
        posts[i].messageHtml = posts[i].messageHtml.replace(linkReg, replacer);
      }

      return posts;
    }
  });
