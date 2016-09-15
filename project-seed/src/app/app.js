angular.module('project-seed', [
  'project-seed.common',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'templates-app',
  'ps.user-list',
  'ps.user-detail'
])

  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
;