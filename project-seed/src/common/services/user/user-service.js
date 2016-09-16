angular.module('ps.services.user', [
  "project-seed.config.constants"
])
  .service('userService', function UserService($http, baseApiUrl) {
    var userService = this;

    userService.getReposForUser = function (username) {
      return $http.get(baseApiUrl + '/users/' + username + '/repos').then(function (results) {
        return results.data;
      })
    };

    userService.getUser = function(username) {
      return $http.get(baseApiUrl + '/users/' + username).then(function(results) {
        return results.data;
      })
    };

    userService.getUsers = function() {
      return $http.get(baseApiUrl + '/users').then(function (results) {
        return results.data;
      })
    };
  })
;