'use strict';

angular.module('myApp.user.authentication-service', [])

  .factory('authentication', function() {
    var user = {
      fullName: 'Jessica Tuan',
      avatarUrl: '/img/avatars/jessica-tuan.jpg',
      email: 'jessica@mail.com'
    };
    var tagByOptions = {
      anyone: 'anyone',
      following: 'following',
      none: 'none'
    };
    var settings = {
      notifications: {
        email: {
          markedFavorites: true,
          mentioned: true,
          receiveReply: true,
          followed: true
        }
      },
      privacy: {
        tagBy: tagByOptions.anyone,
        includeLocation: true,
        allowEmailLookup: true,
        tailorAds: true
      }
    };
    return {
      user: user,
      settings: settings,

      tagBy: function(tagBy) {
        if (tagByOptions[tagBy]) {
          settings.privacy.tagBy = tagBy;
        } else {
          throw new Error('Invalid setting for tag privacy');
        }
        return this;
      },
      includeLocation: function (includeLocation) {
        settings.privacy.includeLoation = !!includeLocation;
        return this;
      },
      allowEmailLookup: function (allowEmailLookup) {
        settings.privacy.allowEmailLookup = !!allowEmailLookup;
        return this;
      },
      tailorAds: function (tailorAds) {
        settings.privacy.tailorAds = !!tailorAds;
        return this;
      },
      notifyMarkedFavorites: function (markedFavorites) {
        settings.notifications.email.markedFavorites = !!markedFavorites;
        return this;
      },
      notifyMentioned: function (mentioned) {
        settings.notifications.email.mentioned = !!mentioned;
        return this;
      },
      notifyReceiveReply: function (receiveReply) {
        settings.notifications.email.receiveReply = !!receiveReply;
        return this;
      },
      notifyFollowed: function (followed) {
        settings.notifications.email.followed = !!followed;
        return this;
      }
    };
  });
