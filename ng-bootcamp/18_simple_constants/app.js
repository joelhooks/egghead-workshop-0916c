angular.module('exampleApp', [
  'app.components.people-list'
])
  .constant('config', {
    apiUrl: 'http://www.json-generator.com/api/json/get/'
  })

  .controller('AppCtrl', function AppCtrl($http, config) {
    var app = this;

    var promise = $http.get(config.apiUrl + 'cfbBFcRBpe');

    promise.then(function (result) {
      app.people = result.data;
    });

    $http.get(config.apiUrl + 'bUstkZFvvS')
      .then(function (result) {
        app.morePeople = result.data;
      });
  })

  .directive('headline', function () {
    return {
      restrict: 'E',
      scope: {
        text: '@' // attribute (string) binding
      },
      template: '<h1>{{text}}</h1>'
    }; // directive definition object DDO
  })
;

