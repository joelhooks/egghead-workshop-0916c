angular.module('ps.services.user', [
  "project-seed.config.constants"
])
  .service('userService', function UserService($http, baseApiUrl, $q) {
    var userService = this;

    var cachedUsers = [];

    userService.fakeService = function() {
      if(cachedUsers.length > 0) {
        return $q(function (resolve, reject) {
          resolve(cachedUsers);
        })
      } else {
        return userService.getUsers
      }
    };

    userService.getReposForUser = function (username) {
      return $http.get(baseApiUrl + '/users/' + username + '/repos').then(function (results) {
        return results.data;
      }, function errorHandler(e) {
        //handle it
        return e;
      });
    };

    userService.getUser = function(username) {
      return $http.get(baseApiUrl + '/users/' + username).then(function(results) {
        return results.data;
      })
    };

    userService.getUsers = function() {
      return $http.get(baseApiUrl + '/users').then(function (results) {
        cachedUsers = results.data;
        return results.data;
      })
    };
  })
;