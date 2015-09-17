'use strict';

angular.module('myApp.user.user-service', [])

  .factory('user', function() {
    var users = _buildMockUsers();

    return {
      getUsers: function() {
        return users;
      },
      getUser: function (userId) {
        for(var i=0; i<users.length; i++) {
          if (users[i].id === userId) {
            return users[i];
          }
        }
      }
    };

    //build some mock data
    function _buildMockUsers() {
      var userNames = [
        'Buzz Usborne',//1
        'Ed Wellbrook',//2
        'Ignacio Giri',//3
        'Jenny Shen',//4
        'Jonathan Moreira',//5
        'Jon Brennan',//6
        'Kerem Suer',//7
        'Lauren Gray',//8
        'Liang Shi',//9
        'Meg Robichaud',//10
        'Michael Wong',//11
        'Pallavi Gupta',//12
        'Ryan Hicks',//13
        'Samihah Azim',//14
        'Sam Soffes',//15
        'Scott Riley',//16
        'Vitor Leal'//17
      ];
      var users = [];
      for (var i = 0; i < userNames.length; i++) {
        var parts = userNames[i].split(' ');
        var user = {
          id: i+1
        };
        user.firstName = parts[0];
        user.lastName = parts[1];
        user.avatarUrl = '/img/avatars/' +
          parts[0].toLowerCase() +
          '-' +
          parts[1].toLowerCase() +
          '.jpg';
        users.push(user);
      }
      return users;
    }
  });
