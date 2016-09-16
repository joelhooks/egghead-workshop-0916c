angular.module('ps.user-detail.repos', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.repos', {
        url: '/repos',
        templateUrl: 'user-detail/repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })
  .controller('UserReposCtrl', function UserReposCtrl($stateParams, userService) {
    var userRepos = this;

    userService.getReposForUser($stateParams.username).then(function(repos) {
      userRepos.repos = repos;
    })
  })
;