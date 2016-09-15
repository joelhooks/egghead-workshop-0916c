angular.module('ps.user-detail', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })
  .controller('UserDetailCtrl', function UserDetailCtrl() {
    var userDetail = this;
    console.log('user detail controller')
  })
;