angular.module('ps.services.user', [])
  .service('userService', function UserService($http, baseApiUrl) {
    var userService = this;

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