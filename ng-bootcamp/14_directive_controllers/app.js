angular.module('exampleApp', [
  'app.components.people-list'
])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    var promise = $http.get('http://www.json-generator.com/api/json/get/cfbBFcRBpe');

    promise.then(function (result) {
      app.people = result.data;
    });

    $http.get('http://www.json-generator.com/api/json/get/bUstkZFvvS')
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

