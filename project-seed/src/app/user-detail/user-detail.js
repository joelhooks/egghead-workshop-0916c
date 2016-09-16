angular.module('ps.user-detail', [
  'ps.user-detail.repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })
  .controller('UserDetailCtrl', function UserDetailCtrl($stateParams, userService) {
    var userDetail = this;

    userService.getUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    })

  })
;