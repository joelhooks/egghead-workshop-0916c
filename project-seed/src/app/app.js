angular.module('project-seed', [
  'project-seed.common',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  // 'templates-app'
])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    $http.get('https://api.github.com/users').then(function (results) {
      app.users = results.data;
    })

  })

;